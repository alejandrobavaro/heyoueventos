import React from "react";
import EventosDestacados from "./EventosDestacados";
import GaleriaEventos from "./GaleriaEventos";
import TestimoniosClientes from "./TestimoniosClientes";
import HeroBanner from "./HeroBanner";
import CtaContacto from "./CtaContacto";
import "../assets/scss/_03-Componentes/_MainHome.scss";

function MainHome() {
  return (
    <div className="heyou-home-container">
      {/* Banner hero principal */}
      <HeroBanner />
      
      {/* Sección de eventos destacados */}
      <EventosDestacados />
      
      {/* Sección "Sobre Nosotros" */}
      <section className="heyou-about-section">
        <h2>Heyou! Experiencias Únicas</h2>
        <p>
          Transformamos tus ideas en eventos inolvidables. Con más de 10 años de experiencia, 
          nos especializamos en crear momentos mágicos y personalizados para cada ocasión.
        </p>
      </section>
      
      {/* Galería de eventos */}
      <GaleriaEventos />
      
      {/* Testimonios de clientes */}
      <TestimoniosClientes />
      
      {/* Llamado a acción de contacto */}
      <CtaContacto />
    </div>
  );
}

export default MainHome;