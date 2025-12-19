import style from './Button.module.css' // Con los estilos es suficiente

const Button = ({ children, onClick, type="button", disabled = false }) => {
  return (
    <button
        // Tipos para el boton
        className={style.button}
        onClick={onClick}
        type={type}
        disabled={disabled}
    >
        {
            children
        }
    </button>
  )
}

export default Button

// Asi podemos usar el Button
/**
  * Llamamos al Button en el componente en que lo necesitamos
  * Abrimos la etiqueta Button
  * Le indicamos el tipo de Button
  * Le indicamos el nombre del Button
*/
// Ejemplo de como se usa
/*
  <Button type="submit">Hola mundo</Button>
*/
// No es necesario usar style y css module