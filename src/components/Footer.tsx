import { Instagram, Youtube, Facebook } from 'lucide-react';
import { FRASE_FIRMA } from '../data';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.logo}>
            La Nani <span>Fitness</span>
          </p>
          <p className={styles.frase}>{FRASE_FIRMA}</p>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Sígueme</p>
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/lananifitness"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de La Nani Fitness"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://www.youtube.com/@lananifitness"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube de La Nani Fitness"
            >
              <Youtube size={22} />
            </a>
            <a
              href="https://www.facebook.com/lananifitness"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de La Nani Fitness"
            >
              <Facebook size={22} />
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Explora</p>
          <a href="/retos">Retos</a>
          <a href="/sobre">Sobre mí</a>
          <a href="/blog">Blog</a>
          <a href="/contacto">Contacto</a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} La Nani Fitness. Hecho con cariño para ti.</p>
      </div>
    </footer>
  );
}
