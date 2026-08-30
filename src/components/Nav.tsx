import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Nav.module.css';

const LINKS_IZQUIERDA = [
  { to: '/', label: 'Inicio' },
  { to: '/retos', label: 'Retos' },
  { to: '/sobre', label: 'Sobre mí' },
];

const LINKS_DERECHA = [
  { to: '/blog', label: 'Blog' },
  { to: '/tienda', label: 'Tienda' },
  { to: '/contacto', label: 'Contacto' },
];

const LINKS = [...LINKS_IZQUIERDA, ...LINKS_DERECHA];

function enlaceClase({ isActive }: { isActive: boolean }): string {
  return `${styles.link} ${isActive ? styles.linkActive : ''}`;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={`container ${styles.bar}`}>
        <nav className={styles.navIzquierda}>
          {LINKS_IZQUIERDA.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={enlaceClase}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="La Nani Fitness" width={200} height={200} />
        </NavLink>

        <nav className={styles.navDerecha}>
          {LINKS_DERECHA.map((link) => (
            <NavLink key={link.to} to={link.to} className={enlaceClase}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/retos" className={styles.cta}>
            Empieza el reto
          </NavLink>
        </nav>

        <button
          className={styles.toggle}
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`${styles.navMovil} ${open ? styles.navMovilOpen : ''}`}>
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={enlaceClase}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/retos" className={styles.cta} onClick={() => setOpen(false)}>
            Empieza el reto
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
