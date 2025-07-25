import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/_03-Componentes/_HeroBanner.scss";

const HeroBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const eventImages = [
    { img: "/img/05-img-galeria2/1.jpeg", alt: "Boda elegante" },
    { img: "/img/05-img-galeria2/2.jpeg", alt: "Evento corporativo" },
    { img: "/img/05-img-galeria2/3.jpeg", alt: "Fiesta temática" },
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
        <div className="logo-container">
          <img 
            src="/img/02-logos/logoheyoueventos.png" 
            alt="Heyou Eventos" 
            className="main-logo"
          />
        </div>
        
        <div className="hero-text-content">
          <h1>
            <span className="gradient-text">Heyou!</span> Experiencias Únicas
          </h1>
          <p className="hero-subtitle">
            Transformamos tus ideas en eventos inolvidables. Con más de 10 años de experiencia, 
            nos especializamos en crear momentos mágicos y personalizados para cada ocasión.
          </p>
          
          {/* <div className="hero-buttons">
            <Link to="/galeria" className="hero-btn primary">
              <span className="btn-icon">🎉</span> Ver nuestros eventos
            </Link>
            <Link to="/contacto" className="hero-btn secondary">
              <span className="btn-icon">💌</span> Contactar ahora
            </Link>
          </div> */}
        </div>
        
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
      </div>
    </section>
  );
};

export default HeroBanner;