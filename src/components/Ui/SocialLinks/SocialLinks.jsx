// src/components/ui/SocialLinks.jsx
import React from 'react';
import styles from './SocialLinks.module.css';

// Array de datos para las redes sociales
const socialMedia = [
  { name: 'Instagram', icon: '', url: 'https://instagram.com/cafeaura' },
  { name: 'Facebook', icon: '', url: 'https://facebook.com/cafeaura' },
  { name: 'Twitter', icon: '', url: 'https://twitter.com/cafeaura' },
];

function SocialLinks({ className = '' }) {
  // `className` se usa para aceptar estilos adicionales de los padres (como la ContactSection)
  return (
    <div className={`${styles.socialLinks} ${className}`}>
      {socialMedia.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank" // Abre el enlace en una nueva pestaña
          rel="noopener noreferrer" // Mejora la seguridad
          aria-label={`Visita nuestro perfil en ${link.name}`}
        >
          <span className={styles.icon}>{link.icon}</span>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;