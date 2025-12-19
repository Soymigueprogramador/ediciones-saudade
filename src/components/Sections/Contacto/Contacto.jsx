{/* import { useState } from "react";
import Menu from "../../Sections/Menu/Menu.jsx";
import ContactForm from "../../Ui/ContactForm/ContactForm.jsx";

const Contacto = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Menu onSelectProduct={setSelectedProduct} />
      <ContactForm selectedProduct={selectedProduct} />
    </>
  );
};

export default Contacto;* */}








import { useState } from "react";
import Menu from "../Menu/Menu";
import ContactForm from "../../Ui/ContactForm/ContactForm.jsx";

const Contacto = ({ showMenu = true, showForm = true }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      {showMenu && <Menu onSelectProduct={setSelectedProduct} />}
      {showForm && <ContactForm selectedProduct={selectedProduct} />}
    </>
  );
};

export default Contacto;