import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/_03-Componentes/_CtaContacto.scss";

const CtaContacto = () => {
  return (
    <section className="cta-section">
      <h2>¿Listo para tu próximo evento?</h2>
      <p>Contáctanos y haremos realidad tu visión</p>
      <Link to="/contacto" className="cta-button">
        Solicitar Presupuesto
      </Link>
    </section>
  );
};

export default CtaContacto;