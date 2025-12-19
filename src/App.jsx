// Importacion de archivos jsx
import "./App.css";
import { useState } from "react";
import Header from "./components/layout/Header/Header.jsx";
import HeroSection from "./components/Sections/HeroSection/HeroSection.jsx";
//import LocationSection from "./components/Sections/LocationSection/LocationSection.jsx";
import Menu from "./components/Sections/Menu/Menu.jsx";
import ContactForm from './components/Ui/ContactForm/ContactForm.jsx'
import Footer from "./components/layout/Footer/Footer.jsx";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Header />

      {/* HOME */}
      <section id="Home">
        <HeroSection />
      </section>

      {/* EDUCIONES */}
      <section id="Ediciones">
        <Menu
          onSelectProduct={setSelectedProduct}
          selectedProduct={selectedProduct}
        />
      </section>

      {/* UBICACION */}
      {/* <section id="Ubicacion">
        <LocationSection />
      </section> */}


      {/* CONTACTO (solo formulario) */}
      <section id="Contacto">
        <ContactForm selectedProduct={selectedProduct} />
      </section>

      <Footer />
    </>
  );
};

export default App;