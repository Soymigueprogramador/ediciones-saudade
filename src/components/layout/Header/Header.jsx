// src/components/layout/Header.jsx
import { useState } from 'react';
import styles from './Header.module.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', id: 'Home' },
    { name: 'Ediciones', id: 'Ediciones' },

    { name: 'Contact', id: 'Contacto' },
  ];

  return (
    <header className={styles.header}>
      {/* 1. Logo */}
      <div className={styles.logo}>
        {/* Aquí iría el ícono de taza */}
        {/* <span>☕</span> */}
        <h1>Ediciones saudade</h1>
      </div>

      {/* 2. Menú de Navegación (visible en desktop) */}
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              {/* Usamos anclas (#) para el smooth scroll a las secciones */}
              <a href={`#${link.id}`} onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 3. Ícono de Búsqueda y Botón de Menú Móvil */}
      <div className={styles.actions}>
        {/* Ícono de Búsqueda (Magnifying Glass) */}
        {/* <span className={styles.searchIcon}>🔍</span> */}


        {/* Botón de Hamburguesa (visible solo en móvil) */}
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {/* Cambia el ícono basado en el estado */}
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
    </header>
  );
}

export default Header;