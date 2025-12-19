import styles from "./MenuItemCard.module.css";

function MenuItemCard({
  name,
  description,
  price,
  image,
  children,
  isSelected,
}) {
  // Nota: `image` debe ser la ruta a tu imagen dentro de la carpeta `assets/images`
  // o una URL completa si usas imágenes externas.

  return (
    <div
      className={`${styles.card} ${
        isSelected ? styles.selected : ""
      }`}
    >
      {/* Contenedor para la imagen */}
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>

      {/* Título del Producto */}
      <h3 className={styles.title}>{name}</h3>

      {/* Descripción y Precio */}
      <div className={styles.details}>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>
          <span className={styles.priceTag}>
            ${price.toFixed(2)}
          </span>
        </p>
      </div>

      {children}
    </div>
  );
}

export default MenuItemCard;