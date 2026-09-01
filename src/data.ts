import type { PasoCamino, Reto, TestimonioSobre, Valor, PostBlog, Faq, SeoMeta, VideoDia, CategoriaTienda, RedSocial, ReelInstagram } from './types';

export const FRASE_FIRMA = 'Anímate, atrévate, acompáñame y comparte';

export const CAMINO: PasoCamino[] = [
  {
    id: 'animate',
    numero: '01',
    verbo: 'Anímate',
    titulo: 'El primer paso es solo decidirlo',
    descripcion: 'Sé que empezar da pereza, y a veces hasta un poco de miedo. Yo también lo sentí. Pero te prometo que no hace falta ser atleta ni tener 20 años: hace falta un ratito al día y ganas de sentirte mejor.',
  },
  {
    id: 'atrevete',
    numero: '02',
    verbo: 'Atrévete',
    titulo: 'Muévete aunque sea despacito',
    descripcion: 'No importa si hoy solo puedes hacer la mitad del ejercicio o si tus piernas tiemblan un poco. Atreverte es venir aunque no estés segura. Yo te guío paso a paso, sin prisa y sin juzgarte.',
  },
  {
    id: 'acompaname',
    numero: '03',
    verbo: 'Acompáñame',
    titulo: 'No lo vas a hacer sola',
    descripcion: 'Aquí no eres un número más. Estoy contigo en cada rutina, en cada reto, en cada mensaje. Y también te vas a encontrar con otras mujeres que están en el mismo camino que tú.',
  },
  {
    id: 'comparte',
    numero: '04',
    verbo: 'Comparte',
    titulo: 'Tu progreso anima a otra',
    descripcion: 'Cuando cuentas cómo te sientes después de una semana moviéndote, le das valor a alguien que todavía no se atreve. Esta comunidad crece porque unas a otras nos empujamos hacia adelante.',
  },
];

export const VALORES: Valor[] = [
  {
    id: 'v1',
    icono: 'heart',
    titulo: 'Ejercicio de verdad, hecho para ti',
    descripcion: 'Nada de rutinas copiadas de chicos de 25 años. Cada movimiento está pensado para proteger tus rodillas, tu espalda y tu equilibrio.',
  },
  {
    id: 'v2',
    icono: 'users',
    titulo: 'Una comunidad que no juzga',
    descripcion: 'Aquí nadie te va a mirar mal por ir "más lenta". Todas empezamos en algún punto, y todas nos apoyamos.',
  },
  {
    id: 'v3',
    icono: 'sparkles',
    titulo: 'Resultados que se sienten, no solo se ven',
    descripcion: 'Más energía para jugar con tus nietos, subir escaleras sin quedarte sin aire, y dormir mejor por la noche.',
  },
  {
    id: 'v4',
    icono: 'shield',
    titulo: 'Seguridad primero, siempre',
    descripcion: 'Sin saltos raros ni impacto que dañe tus articulaciones. Cada reto tiene modificaciones para que lo hagas a tu manera.',
  },
];

export const VIDEOS_RETO_VUELVO_A_MOVERME: VideoDia[] = [
  { dia: 1, titulo: 'Camina en casa, no hay excusas', youtubeId: 'mPYcX6I65Jc' },
  { dia: 2, titulo: 'Equilibrio y evita caídas', youtubeId: 'SPMMnvdbnCM' },
  { dia: 3, titulo: 'Hombros, brazos y espalda', youtubeId: 'j5K9KKFcAtE' },
  { dia: 4, titulo: 'Fortalece tus rodillas en silla', youtubeId: 'Qj_5I1VilR4' },
  { dia: 5, titulo: 'Abdominales en silla', youtubeId: '_i4ni1dCl34' },
  { dia: 6, titulo: 'Ejercicio de rodillas en silla', youtubeId: 'dGrerdSBvfs' },
  { dia: 7, titulo: 'Brazos sin pesas en silla', youtubeId: 'u99KSvg-IQ4' },
  { dia: 8, titulo: 'Piernas con ligas', youtubeId: 'g7JKPdbY6tY' },
  { dia: 9, titulo: 'Brazos con ligas', youtubeId: '84f7HDnG1a8' },
  { dia: 10, titulo: 'Caderas y artrosis', youtubeId: 'u6kBXpifdhg' },
  { dia: 11, titulo: 'Pies, tobillos y pantorrillas', youtubeId: 'NTXhUWqCbRA' },
  { dia: 12, titulo: 'Cardio de bajo impacto, activa todo tu cuerpo', youtubeId: 'wLuPz-jGi9E' },
  { dia: 13, titulo: 'Sentadillas para piernas y glúteos', youtubeId: 'PjEAY7Ob8Ho' },
  { dia: 14, titulo: 'Baja el cortisol y reduce el estrés', youtubeId: 'lK2IavJXyKQ' },
  { dia: 15, titulo: 'Potencia tus músculos con pesa rusa', youtubeId: 'hUIElpm9hv4' },
  { dia: 16, titulo: 'Gana músculo en piernas', youtubeId: 'YxdlTs9GCwc' },
  { dia: 17, titulo: 'Bíceps y tríceps con pesas', youtubeId: '9Z9KbiwFNY4' },
  { dia: 18, titulo: 'Gana músculo en piernas (parte 2)', youtubeId: '6gHY_-Re9eg' },
  { dia: 19, titulo: 'Fortalece brazos y espalda', youtubeId: 'nOexcdOyowc' },
  { dia: 20, titulo: 'Abdomen bajo', youtubeId: 'arjK4pQvRxU' },
  { dia: 21, titulo: 'Brazos y abdomen en pared', youtubeId: 'Z4w8Xm0mz-E' },
];

export const RETOS: Reto[] = [
  {
    id: 'r1',
    slug: 'vuelvo-a-moverme',
    nombre: 'Reto Vuelvo a Moverme',
    duracionDias: 21,
    precio: 19.99,
    nivel: 'principiante',
    problema: 'Piernas débiles, falta de equilibrio y miedo a caerte',
    beneficios: [
      'Rutinas de 15-20 minutos, sin salir de casa',
      'Ejercicios para fortalecer piernas y mejorar el equilibrio',
      'Acompañamiento diario conmigo, paso a paso',
    ],
    destacado: true,
    paypalLink: 'https://www.paypal.com/ncp/payment/KDUFFVP6REGVL',
    diasIncluidos: VIDEOS_RETO_VUELVO_A_MOVERME,
  },
];

export const TESTIMONIOS: TestimonioSobre[] = [
  {
    id: 't1',
    nombre: 'Carmen',
    edad: 67,
    ciudad: 'Valencia, España',
    cita: 'Llevaba años sin agacharme sin dolor. Con las rutinas de Nani volví a jugar en el suelo con mi nieta.',
    logro: 'Recuperó movilidad en rodillas',
  },
  {
    id: 't2',
    nombre: 'Rosa',
    edad: 63,
    ciudad: 'Buenos Aires, Argentina',
    cita: 'Empecé con miedo a caerme al caminar. Hoy subo las escaleras de mi edificio sin agarrarme del pasamanos.',
    logro: 'Mejoró su equilibrio',
  },
  {
    id: 't3',
    nombre: 'Marisol',
    edad: 71,
    ciudad: 'Madrid, España',
    cita: 'Me sentía sola desde que enviudé. En el grupo del reto encontré amigas de verdad.',
    logro: 'Encontró comunidad',
  },
];

export const FAQS: Faq[] = [
  {
    id: 'f1',
    pregunta: '¿Necesito experiencia previa haciendo ejercicio?',
    respuesta: 'No, para nada. La mayoría de las mujeres que empiezan conmigo nunca habían hecho ejercicio de forma constante. Cada rutina tiene una versión más suave para que la adaptes a ti.',
  },
  {
    id: 'f2',
    pregunta: '¿Necesito comprar algo para empezar?',
    respuesta: 'No necesitas equipo especial. Con una silla y un poco de espacio en tu casa es suficiente para la mayoría de las rutinas.',
  },
  {
    id: 'f3',
    pregunta: '¿Qué pasa si tengo alguna lesión o condición de salud?',
    respuesta: 'Siempre te recomiendo consultarlo antes con tu médico. Además, en cada rutina te muestro modificaciones para que cuides tu cuerpo.',
  },
];

export const BLOG_POSTS: PostBlog[] = [
  {
    id: 'b1',
    slug: 'fortalecer-piernas-despues-de-los-60',
    titulo: 'Cómo fortalecer las piernas después de los 60 sin lastimarte',
    resumen: 'Tres ejercicios sencillos que puedes hacer en casa, con una silla, para ganar fuerza y seguridad al caminar.',
    categoria: 'Fuerza y equilibrio',
    fecha: '2026-08-10',
    minutosLectura: 4,
    imagen: '/blog/piernas-fuertes.jpg',
    contenido: [
      'Te lo digo siempre en mis vídeos: unas piernas fuertes son tu mejor seguro contra las caídas. No hace falta ir al gimnasio ni levantar pesas enormes, hace falta constancia con los movimientos correctos.',
      'El primero es tan simple como sentarte y levantarte de una silla, despacio, sin usar las manos si puedes. Repítelo 8 veces. Vas a sentir cómo trabajan tus muslos.',
      'El segundo es el paso lateral: de pie, sujeta el respaldo de una silla y da pasos cortos hacia un lado y hacia el otro. Esto fortalece los músculos que te sostienen cuando caminas por la calle.',
      'Y el tercero, mi favorito: elevar un talón a la vez, como si te pusieras de puntillas, sujeta y baja. Este solo ya mejora muchísimo tu equilibrio.',
      'Hazlos 3 veces por semana y en un mes vas a notar la diferencia al subir escaleras. Y si quieres que te acompañe día a día, ya sabes dónde encontrarme.',
    ],
  },
  {
    id: 'b2',
    slug: 'miedo-a-empezar-a-hacer-ejercicio',
    titulo: 'Si tienes miedo a empezar a hacer ejercicio a los 60, lee esto',
    resumen: 'El miedo a lastimarte o a "no poder" es el motivo número uno por el que muchas mujeres no empiezan. Aquí te cuento cómo lo trabajamos juntas.',
    categoria: 'Motivación',
    fecha: '2026-07-22',
    minutosLectura: 3,
    imagen: '/blog/miedo-a-empezar.jpg',
    contenido: [
      'Cada semana recibo mensajes que empiezan igual: "Nani, tengo miedo de lastimarme" o "ya no tengo edad para esto". Y quiero decirte algo de corazón: ese miedo es normal, y no significa que no puedas.',
      'El error no es sentir miedo, es dejar que el miedo decida por ti. Por eso en mis rutinas siempre empezamos suave, y tú decides cuánto avanzar cada día.',
      'No se trata de compararte con nadie, ni siquiera conmigo. Se trata de moverte un poquito más que ayer. Eso ya es una victoria.',
      'Si hoy sientes ese miedo, te invito a que lo pruebes 5 minutos. Solo 5. Y luego me cuentas cómo te sentiste.',
    ],
  },
  {
    id: 'b3',
    slug: 'combatir-la-soledad-moviendote',
    titulo: 'Cómo combatir la soledad moviéndote (y por qué la comunidad importa)',
    resumen: 'El ejercicio no solo fortalece el cuerpo. Te cuento por qué crear comunidad ha sido tan importante en este camino.',
    categoria: 'Comunidad',
    fecha: '2026-06-30',
    minutosLectura: 3,
    imagen: '/blog/comunidad.jpg',
    contenido: [
      'Muchas veces me escriben mujeres que viven solas, cuyos hijos ya se fueron de casa, y que sienten que el día a día se les hace largo y silencioso.',
      'Cuando empiezas a moverte con constancia, no solo cambia tu cuerpo: cambia tu ánimo. Y cuando lo haces en comunidad, cambia también tu semana entera, porque tienes con quién compartirlo.',
      'Por eso cada reto tiene su grupo. No es solo para que te corrija la postura, es para que sientas que alguien te espera cada mañana.',
      'Si te sientes sola hoy, ven a moverte conmigo. Aquí siempre hay un lugar para ti.',
    ],
  },
  {
    id: 'b4',
    slug: 'dieta-antiinflamatoria-7-dias',
    titulo: 'Dieta antiinflamatoria de 7 días para desinflamar y activar tu cuerpo',
    resumen:
      'Un menú semanal sencillo, con alimentos de verdad, para bajar la inflamación y sentirte más ligera y con más energía.',
    categoria: 'Nutrición',
    fecha: '2026-08-20',
    minutosLectura: 6,
    imagen: '/blog/dieta-antiinflamatoria.jpg',
    contenido: [
      'Muchas me preguntáis qué como en el día a día, así que os dejo un menú de 7 días pensado para desinflamar el cuerpo y devolverte esa energía que a veces sientes que se te escapa. No hace falta nada complicado ni ingredientes raros, solo elegir bien.',
      'El lunes empiezo con avena con leche de avena, canela y arándanos. A mediodía, salmón al horno con verduras asadas y arroz integral. Y para cenar, algo suave: crema de calabaza con pan integral tostado.',
      'El martes desayuno yogur natural con nueces y miel. En la comida, pechuga de pollo a la plancha con ensalada de espinacas y aguacate. Y de cena, una tortilla de verduras con ensalada verde.',
      'El miércoles, tostadas de pan integral con aceite de oliva y tomate para empezar. Al mediodía, lentejas con zanahoria y apio. Y para cenar, merluza al vapor con brócoli y un toque de limón.',
      'El jueves lo abro con un batido de plátano, espinacas y leche de almendras. La comida es arroz integral con verduras salteadas y huevo pochado. Y ceno sopa de pollo con verduras.',
      'El viernes, tostadas con aguacate y huevo revuelto por la mañana. Sardinas al horno con patata cocida y ensalada al mediodía. Y de cena, crema de zanahoria con semillas de lino.',
      'El sábado me doy el gusto de un yogur natural con fresas y semillas de chía. Como pollo al horno con boniato y judías verdes. Y ceno una ensalada de atún con garbanzos y pepino.',
      'Y el domingo, porridge de avena con manzana y canela para desayunar. Merluza con arroz y verduras al vapor al mediodía. Y cierro la semana con una crema de puerros y pan integral.',
      'Los alimentos que más me ayudan a desinflamar son el salmón, el aguacate, la cúrcuma, los frutos rojos y las nueces. Y trato de evitar el azúcar, las harinas refinadas, el alcohol, las frituras y el exceso de sal. Y muy importante: bebe al menos 8 vasos de agua al día.',
      'Como siempre te digo: esto es orientativo, no un mandamiento. Si tienes alguna condición de salud específica, coméntaselo antes a tu médico. Y si te animas a probarlo, cuéntame cómo te sientes.',
    ],
  },
  {
    id: 'b5',
    slug: 'dieta-para-masa-muscular-7-dias',
    titulo: 'Dieta para mantener tu masa muscular después de los 60',
    resumen:
      'Un menú de 7 días pensado para conservar tu fuerza y tu músculo, con proteína en cada comida y sin complicarte la vida.',
    categoria: 'Nutrición',
    fecha: '2026-08-24',
    minutosLectura: 6,
    imagen: '/blog/dieta-masa-muscular.jpg',
    contenido: [
      'Una de las cosas que más me preocupaba al cumplir años era perder fuerza sin darme cuenta. La buena noticia es que se puede frenar, y mucho tiene que ver con lo que comemos. Aquí te dejo mi menú de 7 días para mantener el músculo.',
      'El lunes desayuno huevos revueltos con tostada integral y zumo de naranja. Como pechuga de pollo a la plancha con quinoa y espinacas. Y ceno salmón al horno con patata cocida y ensalada verde.',
      'El martes, yogur griego con nueces, plátano y semillas de chía por la mañana. Al mediodía, lentejas con arroz integral y zanahoria. Y de cena, una tortilla de 3 huevos con verduras salteadas.',
      'El miércoles empiezo con porridge de avena con leche entera y almendras. Como merluza al horno con brócoli y arroz integral. Y ceno pavo a la plancha con ensalada de garbanzos.',
      'El jueves, tostadas con aguacate, huevo pochado y tomate. Al mediodía, ternera magra a la plancha con patata al horno y judías verdes. Y de cena, una crema de lentejas con pan integral tostado.',
      'El viernes desayuno un batido de leche, plátano, avena y mantequilla de cacahuete. Como atún fresco a la plancha con quinoa y verduras asadas. Y ceno un revuelto de huevos con espinacas y queso fresco.',
      'El sábado, yogur griego con frutos rojos y granola sin azúcar. Al mediodía, pollo al horno con boniato y brócoli. Y de cena, sardinas a la plancha con ensalada de garbanzos y pepino.',
      'Y el domingo cierro la semana con una tortita de avena con huevo y plátano de desayuno. Salmón con arroz integral y espárragos al mediodía. Y de cena, una sopa de pollo con verduras y fideos integrales.',
      'La clave de todo esto es simple: come proteína en cada comida, no te saltes el desayuno, y come cada 3-4 horas. Lo que más destruye el músculo es justo lo contrario: saltarse comidas, el exceso de azúcar, el alcohol y el sedentarismo.',
      'Como siempre: esto es orientativo. Si tienes alguna condición de salud, consúltalo primero con tu médico. Y recuerda, la fuerza que no se usa, se pierde — por eso este menú va de la mano con moverte a diario.',
    ],
  },
  {
    id: 'b6',
    slug: 'dieta-anti-estres-anti-cortisol-7-dias',
    titulo: 'Dieta anti-estrés: cómo bajar el cortisol con la alimentación',
    resumen:
      'Un menú de 7 días con alimentos que ayudan a calmar el estrés desde dentro, para acompañar tus rutinas de movimiento.',
    categoria: 'Nutrición',
    fecha: '2026-08-28',
    minutosLectura: 6,
    imagen: '/blog/dieta-anti-estres.jpg',
    contenido: [
      'El estrés no solo se siente en la cabeza, también se siente en el cuerpo — y lo que comemos puede ayudar mucho a calmarlo. Aquí te dejo un menú de 7 días pensado para bajar el cortisol de forma natural.',
      'El lunes desayuno avena con leche de avena, plátano y semillas de chía. Como salmón al horno con arroz integral y espinacas. Y ceno una crema de calabaza con semillas de calabaza tostadas.',
      'El martes, yogur griego con frutos rojos y nueces por la mañana. Al mediodía, pechuga de pavo con quinoa y brócoli al vapor. Y de cena, una tortilla de huevos con espinacas y queso fresco.',
      'El miércoles empiezo con tostadas integrales con aguacate y huevo pochado. Como lentejas con zanahoria, apio y cúrcuma. Y ceno merluza al vapor con patata cocida y ensalada verde.',
      'El jueves, un batido de plátano, leche de almendras, cacao puro y avena de desayuno. Al mediodía, pollo al horno con boniato y judías verdes. Y de cena, una sopa de verduras con fideos integrales.',
      'El viernes desayuno porridge de avena con manzana, canela y almendras. Como atún fresco a la plancha con arroz integral y espárragos. Y ceno un revuelto de huevos con champiñones y tostada integral.',
      'El sábado, yogur griego con plátano, miel y semillas de lino. Al mediodía, sardinas al horno con patata y ensalada de pepino. Y de cena, una crema de brócoli con queso fresco y pan integral.',
      'Y el domingo cierro con tostadas con mantequilla de almendras y plátano de desayuno. Salmón con quinoa y verduras asadas al mediodía. Y de cena, sopa de pollo con verduras y arroz integral.',
      'Los alimentos que más ayudan a bajar el cortisol son el plátano, el aguacate, el salmón, la cúrcuma, el chocolate negro de +70% y las nueces. Y lo que más lo sube es el café en exceso, el azúcar, el alcohol, los ultraprocesados y saltarse comidas.',
      'Y algo que repito siempre: el ejercicio es el mejor antidepresivo natural que existe. Combina este menú con tus rutinas de movimiento y vas a notar la diferencia. Como siempre, esto es orientativo — consulta con tu médico si tienes alguna condición de salud específica.',
    ],
  },
];

export const AMAZON_ESCAPARATE_LINK = 'https://amzn.eu/d/07bfyARy';

export const CATEGORIAS_TIENDA: CategoriaTienda[] = [
  {
    id: 'ropa',
    nombre: 'Ropa deportiva',
    icono: 'shirt',
    descripcion: 'Lo que uso yo misma para entrenar: cómoda, fresca y que aguanta cada rutina.',
    link: 'https://amzn.eu/d/0fogmxBz',
  },
  {
    id: 'mancuernas',
    nombre: 'Mancuernas',
    icono: 'dumbbell',
    descripcion: 'Sets ligeros, perfectos para empezar a ganar fuerza en casa sin agobiarte.',
    link: 'https://amzn.eu/d/0aTV7Xhd',
  },
  {
    id: 'ligas',
    nombre: 'Ligas de resistencia',
    icono: 'activity',
    descripcion: 'Mi herramienta favorita para tonificar piernas y brazos sin cargar peso.',
    link: 'https://amzn.eu/d/00QQXtc1',
  },
  {
    id: 'facial',
    nombre: 'Cuidado facial',
    icono: 'sparkles',
    descripcion: 'Los productos que uso a diario para cuidar mi piel, dentro y fuera del entrenamiento.',
    link: 'https://amzn.eu/d/02TrSGMi',
  },
  {
    id: 'manualidades',
    nombre: 'Manualidades',
    icono: 'scissors',
    descripcion: 'Ideas para esos ratitos de calma, lejos de las pantallas.',
    link: 'https://amzn.eu/d/033yqcnR',
  },
];

export const REELS_INSTAGRAM: ReelInstagram[] = [
  { id: 'video1', url: 'https://youtu.be/BN9zTilPoA4' },
  { id: 'video2', url: 'https://youtu.be/sgeir4eWnP0' },
  { id: 'video3', url: 'https://youtu.be/ZCAUdjTbbYg' },
  { id: 'video4', url: 'https://youtu.be/_byKR_Om3MM' },
  { id: 'video5', url: 'https://youtu.be/n4uFexY3EF0' },
];

export const REDES_SOCIALES: RedSocial[] = [
  {
    id: 'instagram',
    nombre: 'Instagram',
    icono: 'instagram',
    seguidores: '428 mil',
    link: 'https://www.instagram.com/lananifitness',
  },
  {
    id: 'facebook',
    nombre: 'Facebook',
    icono: 'facebook',
    seguidores: '366 mil',
    link: 'https://www.facebook.com/lananifitness',
  },
  {
    id: 'youtube',
    nombre: 'YouTube',
    icono: 'youtube',
    seguidores: '58,7 mil',
    link: 'https://www.youtube.com/@lananifitness',
  },
  {
    id: 'tiktok',
    nombre: 'TikTok',
    icono: 'tiktok',
    seguidores: '42 mil',
    link: 'https://www.tiktok.com/@lananifitness',
  },
  {
    id: 'threads',
    nombre: 'Threads',
    icono: 'threads',
    seguidores: '88 mil',
    link: 'https://www.threads.net/@lananifitness',
  },
];

export const SEO_PAGINAS: Record<string, SeoMeta> = {
  home: {
    title: 'La Nani Fitness — Ejercicio en casa para mujeres +60',
    description: 'Rutinas seguras y acompañamiento real para mujeres +60. Fortalece piernas, mejora tu equilibrio y recupera energía con La Nani.',
    path: '/',
  },
  retos: {
    title: 'Retos de La Nani Fitness — Rutinas guiadas para +60',
    description: 'Descubre el Reto Vuelvo a Moverme y otros programas guiados por La Nani, pensados para mujeres +60 que quieren moverse con seguridad.',
    path: '/retos',
  },
  sobre: {
    title: 'Sobre La Nani — Mi historia y mi método',
    description: 'Conoce mi historia y por qué creé un espacio de ejercicio pensado especialmente para mujeres +60.',
    path: '/sobre',
  },
  blog: {
    title: 'Blog de La Nani Fitness — Consejos para moverte con seguridad',
    description: 'Artículos sobre fuerza, equilibrio, motivación y comunidad para mujeres +60 que quieren cuidarse.',
    path: '/blog',
  },
  contacto: {
    title: 'Contacto — La Nani Fitness',
    description: 'Escríbeme y cuéntame en qué punto de tu camino estás. Estoy para acompañarte.',
    path: '/contacto',
  },
  gracias: {
    title: 'Bienvenida al reto — La Nani Fitness',
    description: 'Tu acceso al Reto Vuelvo a Moverme está listo. Empecemos.',
    path: '/gracias-reto',
  },
  tienda: {
    title: 'Mi tienda recomendada — La Nani Fitness',
    description: 'Lo que uso de verdad: ropa deportiva, mancuernas, ligas y cuidado facial, en mi escaparate de Amazon.',
    path: '/tienda',
  },
};
