import test from 'node:test';
import assert from 'node:assert/strict';
import { updateStats, sanitize } from './social-stats.mjs';
const old = {youtube:{count:58000,updatedAt:'2026-09-01T00:00:00Z',approximate:true}};
const response = data => async () => ({ok:true,json:async()=>data});
test('no credentials does not invent live counts',async()=> {
 const result=await updateStats({}, {}, ()=>{throw Error('unexpected request')});
 assert.deepEqual(result.stats,{});
});
test('failed request preserves count and timestamp',async()=> {
 const result=await updateStats(old,{YOUTUBE_API_KEY:'test'},async()=>{throw Error('secret must not be logged')});
 assert.deepEqual(result.stats,old);assert.deepEqual(result.failed,['youtube']);
});
test('accepts real decreases and zero instead of artificially increasing',async()=> {
 const result=await updateStats(old,{YOUTUBE_API_KEY:'test'},response({items:[{statistics:{subscriberCount:'0',hiddenSubscriberCount:false}}]}));
 assert.equal(result.stats.youtube.count,0);assert.notEqual(result.stats.youtube.updatedAt,old.youtube.updatedAt);
});
test('rejects malformed and hidden subscriber counts',async()=> {
 for(const statistics of [{subscriberCount:'NaN'},{subscriberCount:'123',hiddenSubscriberCount:true}]) {
  assert.deepEqual((await updateStats(old,{YOUTUBE_API_KEY:'test'},response({items:[{statistics}]}))).stats,old);
 }
});
test('public snapshot strips unrelated fields and invalid counts',()=> {
 assert.deepEqual(sanitize({youtube:{...old.youtube,token:'secret'},facebook:{count:-1,updatedAt:old.youtube.updatedAt},untrusted:{count:1}}),old);
});
test('TikTok reports official follower count using bearer auth',async()=> {
 const result=await updateStats({}, {TIKTOK_ACCESS_TOKEN:'test'},async(url,options)=>{
  assert.equal(new URL(url).hostname,'open.tiktokapis.com');assert.equal(options.headers.Authorization,'Bearer test');
  return {ok:true,json:async()=>({data:{user:{follower_count:42001}},error:{code:'ok'}})};
 });assert.equal(result.stats.tiktok.count,42001);
});
test('partial failure does not discard a successful network',async()=> {
 const result=await updateStats(old,{YOUTUBE_API_KEY:'test',INSTAGRAM_ACCESS_TOKEN:'test'},response({items:[{statistics:{subscriberCount:'59000'}}]}));
 assert.equal(result.stats.youtube.count,59000);assert.deepEqual(result.failed,['instagram']);
});
