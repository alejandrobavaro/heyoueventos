import React from "react";
import "../assets/scss/_03-Componentes/_WhatsappFloat.scss";
import { BsWhatsapp } from "react-icons/bs";

function WhatsappFloat() {
  return (
    <a 
      href="https://wa.me/549123456789" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float"
    >
      <BsWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Contáctanos por WhatsApp</span>
    </a>
  );
}

export default WhatsappFloat;