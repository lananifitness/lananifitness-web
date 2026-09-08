import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import TikTokIcon from './TikTokIcon';
import { FRASE_FIRMA } from '../data';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className={styles.logoWrap}>
            <img src="/logo.png" alt="La Nani Fitness" width={200} height={200} loading="lazy" decoding="async" className={styles.logoImg} />
          </div>
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
            <a
              href="https://www.tiktok.com/@lananifitness"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de La Nani Fitness"
            >
              <TikTokIcon size={22} />
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Explora</p>
          <Link to="/retos">Retos</Link>
          <Link to="/sobre">Sobre mí</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/tienda">Tienda</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} La Nani Fitness. Hecho con cariño para ti.</p>
      </div>
    </footer>
  );
}
