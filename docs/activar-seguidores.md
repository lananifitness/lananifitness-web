# Activar los contadores automáticos

## Estado
Preparación local: lector de cifras públicas, consulta periódica desde GitHub Actions y conectores para las cinco redes. Todavía no hay cuentas autorizadas ni cifras consultadas en producción. No se han publicado estos cambios. Las cifras existentes se identifican como «Cifra de referencia»; una red solo muestra «Última consulta» tras una respuesta válida. Puede subir o bajar conforme al dato recibido; YouTube muestra una aproximación.

El archivo público social-stats.json contiene únicamente red, cantidad, fecha y carácter aproximado. Los permisos y claves se guardan en GitHub Actions Secrets, nunca en archivos del sitio ni variables VITE_.

## Empezar con YouTube
1. En Google Cloud Console, crear o seleccionar un proyecto propio y habilitar YouTube Data API v3.
2. Crear una clave de API y restringirla a YouTube Data API v3. No usar restricción por referente web: la consulta la realiza GitHub Actions. Revisar cuotas y el acceso al proyecto.
3. En el repositorio de GitHub: Settings → Secrets and variables → Actions → New repository secret. Nombre: YOUTUBE_API_KEY. Pegar la clave solo en el campo secreto de GitHub.
4. Publicar el código y ejecutar Deploy to GitHub Pages manualmente. Comprobar que la consulta corresponde a @lananifitness y que la cifra es razonable.
5. Solo tras una primera actualización correcta, añadir la variable SOCIAL_STATS_ENABLED con valor true. La consulta se solicita cada hora, al minuto 23; GitHub puede retrasar u omitir ejecuciones programadas. No se ofrece tiempo real segundo a segundo. En repositorios públicos, GitHub puede desactivar horarios tras periodos de inactividad.

## Otras redes
Hay que crear/configurar las aplicaciones oficiales y completar la autorización de las cuentas. No basta con indicar el nombre de usuario. Confirmar permisos, versión y pertenencia de la cuenta durante la activación. Los adaptadores de Meta están preparados, pero no se han validado con cuentas reales; sus páginas de documentación devolvieron un límite de solicitudes durante esta preparación.

| Red | Secrets | Variables | Requisito |
|---|---|---|---|
| Instagram | INSTAGRAM_ACCESS_TOKEN | INSTAGRAM_USER_ID, META_API_VERSION | Cuenta profesional y token de Instagram Login con lectura del perfil; verificar followers_count en la versión elegida. |
| Facebook | FACEBOOK_ACCESS_TOKEN | FACEBOOK_PAGE_ID, META_API_VERSION | Token autorizado para leer followers_count de la página administrada. No confundir seguidores con me gusta. |
| TikTok | TIKTOK_ACCESS_TOKEN | — | Aplicación aprobada según corresponda, autorización user.info.stats. |
| Threads | THREADS_ACCESS_TOKEN | — | Acceso a insights de la cuenta, incluidos followers_count. |

META_API_VERSION debe tener la forma vNN.0 y corresponder a una versión admitida por la aplicación; no se selecciona una versión a ciegas. No hay flujo OAuth ni renovación automática de tokens en esta preparación. Los tokens que caduquen deben renovarse mediante el proveedor y actualizarse en Secrets; para funcionamiento continuo de esas redes habrá que completar la gestión de renovación durante su conexión. YouTube mediante clave API no necesita tokens de usuario.

## Fallos y operación
Cada consulta tiene límite de 15 segundos. Si una red falla, se conserva su último valor publicado y su fecha original; no se muestra como recién actualizado. Si no existe historial, se mantiene la referencia manual. El navegador consulta el archivo al abrir la página y cada cinco minutos mientras está visible. Los avisos del trabajo de GitHub identifican la red que falla sin mostrar respuestas de API ni credenciales. No hay avisos por correo adicionales configurados.

Para desactivar consultas programadas: SOCIAL_STATS_ENABLED=false. El sitio sigue mostrando los últimos datos con su fecha. El trabajo se ejecuta también al publicar cambios o al lanzarlo manualmente, si existen credenciales.

## Comprobaciones
`node --test scripts/social-stats.test.mjs`: sin credenciales, fallo de red, cifras inválidas, suscriptores ocultos, valor cero/disminución, eliminación de datos privados y fallo parcial. Falta comprobar proveedores reales tras autorizar cada cuenta.

## Documentación
- https://developers.google.com/youtube/v3/docs/channels/list
- https://developers.tiktok.com/doc/tiktok-api-v2-get-user-info/
- https://developers.facebook.com/docs/graph-api/reference/page/
- https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/
- https://www.postman.com/meta/threads/request/4pbwq2u/get-account-insights
