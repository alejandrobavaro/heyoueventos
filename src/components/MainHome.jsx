import React from "react";
import EventosDestacados from "./EventosDestacados";
import GaleriaEventos from "./GaleriaEventos";
import GaleriaSalones from "./GaleriaSalones";
import Testimonios from "./Testimonios";
import HeroBanner from "./HeroBanner";
import Contacto from "./Contacto";
import "../assets/scss/_03-Componentes/_MainHome.scss";

function MainHome() {
  return (
    <div className="heyou-home-container">
      {/* Banner hero principal con gradiente animado */}
      <HeroBanner />
      
      {/* Sección de eventos destacados */}
      <EventosDestacados />
      
      {/* Sección "Sobre Nosotros" */}
      {/* <section className="heyou-about-section">
        <h2>
          <span className="gradient-text">Heyou!</span> Experiencias Únicas
        </h2>
        <p>
          Transformamos tus ideas en eventos inolvidables. Con más de 10 años de experiencia, 
          nos especializamos en crear momentos mágicos y personalizados para cada ocasión.
        </p>
        <div className="icon-divider">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="icon-dot"
              style={{ 
                backgroundColor: 
                  i === 1 ? '#FF5252' : 
                  i === 2 ? '#FFD740' : '#40C4FF',
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </section> */}
      
      {/* Galería de eventos */}
      <GaleriaEventos />
      
      {/* Testimonios de clientes */}
      <Testimonios />

      <GaleriaSalones />
      
      {/* Llamado a acción de contacto */}
      <Contacto />
    </div>
  );
}

export default MainHome;