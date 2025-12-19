// src/components/ui/ContactForm.jsx
import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button.jsx"; // Importamos el componente Button que ya creamos

function ContactForm({ selectedProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // 'idle', 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.number || !formData.message) {
      alert("Por favor, rellena todos los campos.");
      return;
    }

    const phoneNumber = "5491126644514";

    const message = `
Hola, quiero hacer una consulta desde la web.

👤 Nombre: ${formData.name}
📞 Teléfono: ${formData.number}

📦 Producto consultado:
${
  selectedProduct
    ? `- ${selectedProduct.name}
- ${selectedProduct.description}
- Precio: $${selectedProduct.price}`
    : "No se seleccionó ningún producto"
}

📝 Mensaje:
${formData.message}
`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      number: "",
      message: "",
    });
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
        {/* Input: Nombre */}
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
        />

        {/* Input: Teléfono */}
        <input
          type="number"
          name="number"
          placeholder="Número de teléfono"
          value={formData.number}
          onChange={handleChange}
          required
          className={styles.input}
        />

        {/* Textarea: Mensaje */}
        <textarea
          name="message"
          placeholder="Tu mensaje..."
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className={styles.textarea}
        />

        {/* Botón de Enviar */}
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
        </Button>

        {/* Mensajes de Estado */}
        {status === "success" && (
          <p className={styles.successMessage}>
            ¡Mensaje enviado con éxito! Gracias por contactarnos.
          </p>
        )}

        {status === "error" && (
          <p className={styles.errorMessage}>
            Ocurrió un error. Inténtalo de nuevo más tarde.
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;