import React, { useState } from "react";
import "../assets/scss/_03-Componentes/_EventosDestacados.scss";

function EventosDestacados() {
  const [eventos] = useState([
    {
      id: 1,
      titulo: "Boda en Viñedo Exclusivo",
      imagen: "/img/06-img-galeria3/id1-c1.png",
      video: "https://www.youtube.com/embed/boda-viñedo-heyou",
      fecha: "15 Octubre 2023",
      descripcion: "Celebración íntima en un viñedo privado con cena gourmet y fuegos artificiales personalizados. Diseñamos cada detalle para crear una experiencia única bajo las estrellas.",
      destacado: true,
      color: "#FF5252" // Rojo
    },
    {
      id: 2,
      titulo: "Fiesta Corporativa Anual",
      imagen: "/img/06-img-galeria3/id2-c2.png",
      video: "https://www.youtube.com/embed/fiesta-corporativa-heyou",
      fecha: "20 Noviembre 2023",
      descripcion: "Evento para 300 ejecutivos con tecnología interactiva, show en vivo y catering de alta gama. Transformamos un espacio convencional en una experiencia memorable.",
      destacado: true,
      color: "#FFD740" // Amarillo
    },
    {
      id: 3,
      titulo: "Quinceañera de Ensueño",
      imagen: "/img/06-img-galeria3/id3-c3.png",
      video: "https://www.youtube.com/embed/quinceañera-heyou",
      fecha: "5 Diciembre 2023",
      descripcion: "Celebración temática de princesa con decoración flotante, coreografía sorpresa y pastel espectacular. Creamos un cuento de hadas real para la quinceañera.",
      destacado: true,
      color: "#40C4FF" // Celeste
    },
    {
      id: 4,
      titulo: "Gala Benéfica Premium",
      imagen: "/img/06-img-galeria3/id4-c4.png",
      video: "https://www.youtube.com/embed/gala-benefica-heyou",
      fecha: "12 Enero 2024",
      descripcion: "Noche de gala con subasta privada, show exclusivo y menú degustación. Diseño de iluminación y ambientación que elevó la recaudación en un 40%.",
      destacado: true,
      color: "#E040FB" // Violeta
    }
  ]);

  return (
    <section className="heyou-eventos-destacados">
      <div className="section-header">
        <h2>
          <span className="gradient-text">Nuestros</span> Eventos Destacados
        </h2>
        <p className="section-subtitle">
          Experiencias únicas creadas con pasión y atención al detalle
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
      </div>
      
      <div className="eventos-container">
        {eventos.map(evento => (
          <div key={evento.id} className="evento-card" style={{ borderTop: `4px solid ${evento.color}` }}>
            <div className="media-container">
              <img 
                src={evento.imagen} 
                alt={evento.titulo} 
                className="evento-imagen" 
                loading="lazy"
              />
              {evento.video && (
                <div className="video-icon">
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                  </svg>
                </div>
              )}
            </div>
            
            <div className="evento-info">
              <h3>{evento.titulo}</h3>
              <p className="evento-fecha">
                <svg viewBox="0 0 24 24" width="16" height="16" fill={evento.color}>
                  <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                </svg>
                {evento.fecha}
              </p>
              <p className="evento-descripcion">{evento.descripcion}</p>
              
              <div className="evento-actions">
                <button className="evento-btn" style={{ backgroundColor: evento.color }}>
                  Ver Detalles
                </button>
                {evento.video && (
                  <a 
                    href={evento.video} 
                    className="video-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Ver Video
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cta-section">
        <p>¿Listo para crear tu evento perfecto?</p>
        <button className="cta-button">
          Contáctanos ahora
        </button>
      </div>
    </section>
  );
}

export default EventosDestacados;