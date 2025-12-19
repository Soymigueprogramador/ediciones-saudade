// src/components/layout/Footer.jsx
import styles from './Footer.module.css';

// Componente SocialLinks simple (para este ejemplo)
const SocialLinks = () => (
    <div className={styles.social}>
        {/* Aquí usarías íconos reales, ej: <FaInstagram /> */}
        <a href="https://instagram.com/cafeaura" target="_blank" rel="noopener noreferrer">
            <span className={styles.icon}></span> {/* Instagram */}
        </a>
        <a href="https://facebook.com/cafeaura" target="_blank" rel="noopener noreferrer">
            <span className={styles.icon}></span> {/* Facebook */}
        </a>
        <a href="https://twitter.com/cafeaura" target="_blank" rel="noopener noreferrer">
            <span className={styles.icon}></span> {/* Twitter / X */}
        </a>
    </div>
);

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {/* Enlaces Sociales (Opcional, si no están en la sección de Contacto) */}
        <SocialLinks />

        {/* Texto de Copyright */}
        <p className={styles.copyright}>
          &copy; {currentYear} Café Café. Todos los derechos reservados.
        </p>

        {/* Enlaces de políticas (opcional, pero buena práctica) */}
        <nav className={styles.links}>
            <a href="#privacy">Política de Privacidad</a>
            <a href="#terms">Términos y Condiciones</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;