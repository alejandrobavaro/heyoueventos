import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/_03-Componentes/_HeroBanner.scss";

const HeroBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array optimizado con imágenes de eventos
  const eventImages = [
    { img: "/img/05-img-galeria2/1.jpeg", alt: "Boda elegante" },
    { img: "/img/05-img-galeria2/2.jpeg", alt: "Evento corporativo" },
    { img: "/img/05-img-galeria2/3.jpeg", alt: "Fiesta temática" },
    // ... agregar las demás imágenes con sus descripciones
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => 
        prev === eventImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [eventImages.length]);

  return (
    <section className="heyou-hero">
      <div className="hero-slideshow">
        {eventImages.map((image, index) => (
          <div 
            key={image.img}
            className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image.img})` }}
            aria-label={image.alt}
            role="img"
          />
        ))}
      </div>
      
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1>Heyou! Eventos</h1>
        <p className="hero-subtitle">Creando momentos inolvidables</p>
        <div className="hero-buttons">
          <Link to="/galeria" className="hero-btn primary">
            Ver nuestros eventos
          </Link>
          <Link to="/contacto" className="hero-btn secondary">
            Contactar ahora
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;