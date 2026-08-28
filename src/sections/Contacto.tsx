import { MessageCircle, Mail, Instagram } from 'lucide-react';
import { FAQS } from '../data';
import { useReveal } from '../hooks/useReveal';
import styles from './Contacto.module.css';

export default function Contacto() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className={styles.section} ref={ref}>
      <div className="container">
        <header className={`reveal ${styles.header}`}>
          <p className={styles.eyebrow}>Hablemos</p>
          <h1>Cuéntame en qué punto estás</h1>
          <p className={styles.lead}>
            Escríbeme por el canal que prefieras. Leo cada mensaje y te respondo yo misma o mi
            equipo, siempre con cariño.
          </p>
        </header>

        <div className={styles.canales}>
          <a
            className={`reveal ${styles.canal}`}
            href="https://wa.me/34600000000?text=Hola%20Nani%2C%20quiero%20saber%20m%C3%A1s%20sobre%20tus%20retos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={26} />
            <div>
              <h3>WhatsApp</h3>
              <p>La forma más rápida de escribirme</p>
            </div>
          </a>

          <a
            className={`reveal ${styles.canal}`}
            href="mailto:hola@lananifitness.com"
          >
            <Mail size={26} />
            <div>
              <h3>Correo</h3>
              <p>hola@lananifitness.com</p>
            </div>
          </a>

          <a
            className={`reveal ${styles.canal}`}
            href="https://www.instagram.com/lananifitness"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={26} />
            <div>
              <h3>Instagram</h3>
              <p>@lananifitness</p>
            </div>
          </a>
        </div>

        <div className={`reveal ${styles.faqs}`}>
          <h2>Preguntas frecuentes</h2>
          <div className={styles.faqList}>
            {FAQS.map((faq) => (
              <details key={faq.id} className={styles.faq}>
                <summary>{faq.pregunta}</summary>
                <p>{faq.respuesta}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
