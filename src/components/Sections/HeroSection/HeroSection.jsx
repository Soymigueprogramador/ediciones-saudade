// src/components/sections/HeroSection.jsx
import Button from '../../Ui/Button/Button'; // Usamos el botón reutilizable
import styles from './HeroSection.module.css';

function HeroSection() {
    return (
        // El ID "home" es crucial para el smooth scroll desde el Header
        <section id="Home" className={styles.hero}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Ediciones saudade</h1>
                    <p className={styles.subtitle}>Tu edicion perfecta.</p>

                    {/* Botón CTA que hace scroll a la sección de menú */}
                    <Button onClick={() => {
                        document.getElementById('Ediciones').scrollIntoView({ behavior: 'smooth' });
                    }}>
                        Explora Nuestro Ediciones
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;