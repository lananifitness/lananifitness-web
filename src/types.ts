export type PasoId = 'animate' | 'atrevete' | 'acompaname' | 'comparte';

export interface PasoCamino {
  id: PasoId;
  numero: string;
  verbo: string;
  titulo: string;
  descripcion: string;
}

export interface VideoDia {
  dia: number;
  titulo: string;
  youtubeId: string;
}

export interface Reto {
  id: string;
  slug: string;
  nombre: string;
  duracionDias: number;
  precio: number;
  nivel: 'principiante' | 'todos los niveles';
  problema: string;
  beneficios: string[];
  destacado?: boolean;
  paypalLink?: string;
  diasIncluidos?: VideoDia[];
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
  fecha: string;
  minutosLectura: number;
  imagen: string;
  contenido: string[];
}

export interface Faq {
  id: string;
  pregunta: string;
  respuesta: string;
}

export interface CategoriaTienda {
  id: string;
  nombre: string;
  icono: 'shirt' | 'dumbbell' | 'activity' | 'sparkles' | 'scissors';
  descripcion: string;
  link: string;
}

export interface RedSocial {
  id: string;
  nombre: string;
  icono: 'instagram' | 'youtube' | 'facebook' | 'tiktok' | 'threads';
  seguidores: string;
  link: string;
}

export interface SeoMeta {
  title: string;
  description: string;
  path: string;
}
