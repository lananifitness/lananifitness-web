import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Nav.module.css';

const LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/retos', label: 'Retos' },
  { to: '/sobre', label: 'Sobre mí' },
  { to: '/blog', label: 'Blog' },
  { to: '/tienda', label: 'Tienda' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <NavLink to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="La Nani Fitness" width={44} height={44} />
          <span className={styles.logoTexto}>
            La Nani <span>Fitness</span>
          </span>
        </NavLink>

        <button
          className={styles.toggle}
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.linkActive : ''}`}
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
