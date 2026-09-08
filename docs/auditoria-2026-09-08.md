# Auditoría de La Nani Fitness — 8 de septiembre de 2026

## Alcance y estado
Revisado el código de todas las páginas, componentes, estilos, datos, metadatos, sitemap y configuración de publicación. Inspeccionada la portada publicada en navegador. Correcciones locales; no se ha publicado nada ni cambiado precios, contenidos comerciales, logo, tipografías o paleta.

La disponibilidad de archivos locales se resolvió durante la segunda revisión. La compilación de producción completa pasa y genera 14 documentos HTML. Pasan 16 comprobaciones automáticas de HTML, metadatos, enlaces internos, recursos y sitemap. Estas comprobaciones también se ejecutarán antes de publicar en GitHub Pages.

Verificadas las 14 páginas a 375 px y las ocho plantillas representativas a 320, 768, 1024 y 1440 px: sin desbordamiento horizontal. Comprobados menú completo, Escape, diálogo de rutinas con foco y restauración, y carga bajo demanda: cero iframes al abrir la portada; uno tras reproducir el primer vídeo, manteniendo las otras cuatro portadas. No se observaron errores de JavaScript en las comprobaciones finales.

No se ha medido Lighthouse ni Core Web Vitals en producción. El archivo JavaScript propio pesa 223,45 kB (72,43 kB gzip) y el CSS 29,94 kB (5,75 kB gzip), según la compilación. Estos tamaños no incluyen fuentes, imágenes ni el reproductor externo una vez activado.

## Correcciones aplicadas
- Menú móvil: deja de ocultar el botón final por el límite fijo de 420 px; permite desplazamiento dentro de la altura disponible. El menú cerrado queda oculto al teclado y a lectores de pantalla. Cierra con Escape y devuelve el foco al botón. Se cierra al cambiar de ruta.
- Cabecera: modo compacto hasta 1050 px para evitar la compresión de los enlaces en tabletas.
- Tarjetas: mínimos de las rejillas limitados al espacio disponible, evitando desbordamiento en pantallas estrechas. Correo de contacto y textos largos pueden partirse.
- Títulos principales adaptables en móvil y metadatos del blog con salto de línea.
- Animaciones: umbral de entrada cero para que artículos largos y rejillas extensas no permanezcan invisibles; alternativa sin observador y con movimiento reducido. El observador se renueva al cambiar de artículo.
- Accesibilidad: enlace para saltar al contenido, nombres de navegación y de vídeos diferenciados, estado de días completados y objetivos táctiles ampliados.
- Reproductor de rutinas: diálogo nativo con foco contenido, cierre con Escape, restauración del foco y bloqueo temporal del desplazamiento del fondo.
- SEO: tres artículos que faltaban añadidos al sitemap; noindex para páginas y artículos inexistentes; idioma social e imagen de Twitter.
- Enlaces internos del pie utilizan la navegación de React sin recargar todo el documento. Logo del pie con dimensiones declaradas, decodificación asíncrona y carga diferida.

## Mejoras aprobadas e implementadas
1. HTML generado para cada página mediante los componentes existentes, con hidratación de React. Contenido disponible antes de ejecutar JavaScript, metadatos sociales propios y URLs canónicas con barra final. Sitemap generado desde los datos para evitar omisiones. El archivo de error conserva contenido de error propio. El flujo de GitHub Pages ya no sobrescribe ese archivo con la portada.
2. Las tarjetas de vídeo mantienen proporciones y fondos, con miniatura y botón accesible. Solo al pulsar se inserta el reproductor correspondiente.
3. Texto oscuro sobre los fondos de marca y variantes oscuras de rosa/naranja para texto sobre crema; se conservan paleta de fondos, logo, tipografías y decoración. También se oscurece el degradado del título para mejorar lectura. El texto sobre fondos de marca usa #160910, y los textos rosa/naranja sobre crema usan #b91c43 y #a34312.

## Pendiente de una decisión independiente
El acceso a /gracias-reto y los identificadores de los vídeos siguen en el código público, sin comprobación de compra. Si el reto debe ser privado, requiere una solución de acceso y validación de pago del lado del servidor. La aprobación recibida se refería a SEO, vídeos y contraste; no se han tocado pagos ni restringido el acceso. Ocultar la página a buscadores no protegería su contenido.

## Otras observaciones
El JSON-LD actual identifica el proyecto como HealthAndBeautyBusiness sin datos de establecimiento; conviene confirmar la entidad antes de cambiarlo. Los artículos podrían incorporar BlogPosting con datos verificados. Revisar editorialmente las afirmaciones de salud y nutrición con una persona cualificada; no se han modificado ni validado médicamente. Contadores sociales, edad y testimonios no se han contrastado externamente.

## Publicación y seguimiento
Los cambios siguen locales y no se han publicado. Después de publicar, comprobar respuestas HTTP y redirecciones en GitHub Pages, vistas previas al compartir y rendimiento móvil real. No se ha ejecutado ninguna compra ni enviado mensajes.

## Referencia técnica
Google Search Central: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics — estados HTTP, metadatos JavaScript y ventajas de prerenderizar.
