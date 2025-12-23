import React, { useState } from "react";
import Swal from "sweetalert2"; // 1. Importamos SweetAlert2
import styles from "./ContactForm.module.css";
import Button from "../Button/Button.jsx";

function ContactForm({ selectedProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 2. Alerta de validación en lugar del alert nativo
    if (!formData.name || !formData.number || !formData.message) {
      Swal.fire({
        title: "Campos incompletos",
        text: "Por favor, rellena todos los campos antes de enviar.",
        icon: "warning",
        confirmButtonColor: "#8b5e3c", // Color acorde a Ediciones Saudade
      });
      return;
    }

    const phoneNumber = "+5491144480181";
    //const phoneNumber = "+5491126644514"; Lo dejo asi para las priebas en local
    const message = `
Hola, quiero hacer una consulta desde la web.
👤 Nombre: ${formData.name}
📞 Teléfono: ${formData.number}
📦 Producto: ${selectedProduct ? selectedProduct.name : "Consulta general"}
📝 Mensaje: ${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // 3. Ejecutar el envío y mostrar éxito
    try {
      window.open(whatsappURL, "_blank");

      Swal.fire({
        title: "Gracias por tu mensaje!!",
        text: "Tu mensaje ha sido enviado. Pronto nos pondremos en contacto con vos",
        icon: "success",
        confirmButtonColor: "#8b5e3c",
        timer: 300000, // Se cierra sola tras 3 segundos
        timerProgressBar: true,
      });

      // Limpiar formulario
      setFormData({ name: "", number: "", message: "" });
      setStatus("success");
    } catch (error) {
      Swal.fire({
        title: "UPS",
        text: "No pudimos abrir WhatsApp. Inténtalo de nuevo mas tarde.",
        icon: "error",
      });
      setStatus("error");
    }
  };

  return (
    <div className={styles.formContainer}>
      {selectedProduct && (
        <div className={styles.selectedProduct}>
          <strong>Producto seleccionado:</strong>
          <p>
            {selectedProduct.name} — ${selectedProduct.price}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
        />

        <input
          type="number"
          name="number"
          placeholder="Número de teléfono"
          value={formData.number}
          onChange={handleChange}
          required
          className={styles.input}
        />

        <textarea
          name="message"
          placeholder="Tu mensaje..."
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className={styles.textarea}
        />

        <Button type="submit" disabled={status === "sending"}>
          Enviar Mensaje
        </Button>

        {/* Nota: Hemos quitado los <p> de estado porque ahora usamos SweetAlert */}
      </form>
    </div>
  );
}

export default ContactForm;