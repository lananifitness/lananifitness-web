import { readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const ids = ['instagram', 'facebook', 'youtube', 'tiktok', 'threads'];
export function validEntry(entry) {
  return entry && Number.isSafeInteger(entry.count) && entry.count >= 0 &&
    typeof entry.updatedAt === 'string' && Number.isFinite(Date.parse(entry.updatedAt)) &&
    Date.parse(entry.updatedAt) <= Date.now() + 60000;
}
export function sanitize(data) {
  return Object.fromEntries(ids.filter(id => validEntry(data?.[id])).map(id => [id, {
    count: data[id].count, updatedAt: data[id].updatedAt, approximate: data[id].approximate === true,
  }]));
}
async function json(url, token, fetcher) {
  const response = await fetcher(url, { headers: token ? {Authorization: `Bearer ${token}`} : {}, signal: AbortSignal.timeout(15000), redirect: 'error' });
  if (!response.ok) throw new Error('Request failed');
  const data = await response.json();
  if (data.error && data.error.code !== 'ok') throw new Error('API error');
  return data;
}
export async function updateStats(previous, env, fetcher = fetch) {
  const stats = sanitize(previous);
  const failed = [];
  const updated = [];
  const jobs = [];
  if (env.YOUTUBE_API_KEY) jobs.push(['youtube', async () => {
    const url = new URL('https://www.googleapis.com/youtube/v3/channels');
    url.search = new URLSearchParams({part:'statistics',forHandle:'@lananifitness',key:env.YOUTUBE_API_KEY});
    const data = await json(url, null, fetcher);
    const entry = data.items?.[0]?.statistics;
    if (!entry || entry.hiddenSubscriberCount || !/^\d+$/.test(entry.subscriberCount)) throw new Error('Unavailable');
    return Number(entry.subscriberCount);
  }]);
  if (env.TIKTOK_ACCESS_TOKEN) jobs.push(['tiktok', async () => (await json('https://open.tiktokapis.com/v2/user/info/?fields=follower_count',env.TIKTOK_ACCESS_TOKEN,fetcher)).data?.user?.follower_count]);
  for (const [id, host, account, token] of [
    ['instagram','graph.instagram.com',env.INSTAGRAM_USER_ID,env.INSTAGRAM_ACCESS_TOKEN],
    ['facebook','graph.facebook.com',env.FACEBOOK_PAGE_ID,env.FACEBOOK_ACCESS_TOKEN],
  ]) {
    if (account || token) jobs.push([id, async () => {
      if (!account || !token || !/^v\d+\.\d+$/.test(env.META_API_VERSION || '') || !/^\d+$/.test(account)) throw new Error('Configuration incomplete');
      return (await json(`https://${host}/${env.META_API_VERSION}/${account}?fields=followers_count`, token, fetcher)).followers_count;
    }]);
  }
  if (env.THREADS_ACCESS_TOKEN) jobs.push(['threads', async () => {
    const data = await json('https://graph.threads.net/v1.0/me/threads_insights?metric=followers_count',env.THREADS_ACCESS_TOKEN,fetcher);
    const entry = data.data?.find(item => item.name === 'followers_count');
    return entry?.total_value?.value ?? entry?.values?.[0]?.value;
  }]);
  await Promise.all(jobs.map(async ([id, getCount]) => {
    try {
      const count = await getCount();
      if (!Number.isSafeInteger(count) || count < 0) throw new Error('Invalid count');
      stats[id] = {count, updatedAt:new Date().toISOString(), approximate:id === 'youtube'};
      updated.push(id);
    } catch { failed.push(id); } // Never print responses, request URLs or tokens.
  }));
  return {stats, updated, failed};
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  let previous = {};
  try { previous = sanitize(JSON.parse(await readFile('public/social-stats.json','utf8'))); } catch {}
  // Preserve the most recent successful values across independent GitHub runners.
  if (process.env.GITHUB_ACTIONS === 'true') {
    try {
      const deployed = sanitize(await json('https://lananifitness.com/social-stats.json', null, fetch));
      for (const [id, entry] of Object.entries(deployed)) if (!previous[id] || Date.parse(entry.updatedAt) > Date.parse(previous[id].updatedAt)) previous[id] = entry;
    } catch { console.warn('Previous published statistics unavailable.'); }
  }
  const result = await updateStats(previous, process.env);
  await writeFile('public/social-stats.json', JSON.stringify(result.stats,null,2)+'\n');
  console.log(`Updated: ${result.updated.join(', ') || 'none'}.`);
  for (const id of result.failed) console.warn(`::warning::Statistics unavailable for ${id}; keeping its last successful value.`);
  if (!result.updated.length) console.warn('::warning::No live statistics updated. Check account credentials and permissions.');
}
