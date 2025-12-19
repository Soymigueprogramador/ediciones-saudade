// src/components/sections/LocationSection.jsx
import React from 'react';
import styles from './LocationSection.module.css';

function LocationSection() {
    // Datos fijos de la ubicación (simulación)
    const locationData = {
        address: 'Calle de la Felicidad, 123 - Ciudad Sol',
        hours: 'Lun-Dom: 7am - 8pm',
        mapImageUrl: '/assets/image/map-placeholder.jpg',
        // En un proyecto real, esto sería un iframe de Google Maps
    };

    return (
        // ID para el smooth scroll desde el Header
        <section id="ubicacion" className={styles.locationSection}>
            <div className={styles.contentWrapper}>

                <h2 className={styles.heading}>NUESTRA UBICACIÓN</h2>

                <div className={styles.locationGrid}>

                    {/* 1. Mapa (Placeholder) */}
                    <div className={styles.mapContainer}>
                        {/* Aquí iría el código de un iframe de Google Maps (embed)
                          o el componente de una librería de mapas como React-Leaflet.
                          Por ahora, usamos la imagen placeholder.
                        */}
                        <img
                            src={locationData.mapImageUrl}
                            alt="Mapa de ubicación de Café Aura"
                            className={styles.mapImage}
                        />
                    </div>

                    {/* 2. Detalles de la Ubicación y Horarios */}
                    <div className={styles.details}>
                        <p className={styles.address}>
                            {locationData.address}
                        </p>
                        <p className={styles.hours}>
                            **Horario:** {locationData.hours}
                        </p>
                        <p className={styles.extraInfo}>
                            ¡Te esperamos para tu pausa perfecta!
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default LocationSection;