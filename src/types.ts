export type PasoId = 'animate' | 'atrevete' | 'acompaname' | 'comparte';

/** Los 4 pasos del camino, tomados de la frase firma de La Nani. */
export interface PasoCamino {
  id: PasoId;
  numero: string; // '01' etc — sí tiene sentido aquí: es una secuencia real
  verbo: string;
  titulo: string;
  descripcion: string;
}

export interface VideoDia {
  dia: number;
  titulo: string;
  youtubeId: string; // solo el ID, ej: "dQw4w9WgXcQ" de youtube.com/watch?v=dQw4w9WgXcQ
}

export interface Reto {
  id: string;
  slug: string;
  nombre: string;
  duracionDias: number;
  precio: number;
  nivel: 'principiante' | 'todos los niveles';
  problema: string; // el dolor real que resuelve
  beneficios: string[];
  destacado?: boolean;
  paypalHostedButtonId?: string; // si existe, el CTA compra directo por PayPal
}

export interface TestimonioSobre {
  id: string;
  nombre: string;
  edad: number;
  ciudad: string;
  cita: string;
  logro: string;
}

export interface Valor {
  id: string;
  icono: 'heart' | 'users' | 'sparkles' | 'shield';
  titulo: string;
  descripcion: string;
}

export interface PostBlog {
  id: string;
  slug: string;
  titulo: string;
  resumen: string;
  categoria: string;
  fecha: string; // ISO
  minutosLectura: number;
  imagen: string;
  contenido: string[]; // párrafos
}

export interface Faq {
  id: string;
  pregunta: string;
  respuesta: string;
}

export interface SeoMeta {
  title: string;
  description: string;
  path: string;
}
