import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../assets/scss/_03-Componentes/_GaleriaEventos.scss";

function GaleriaEventos() {
  // Configuración del slider
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: window.innerWidth > 768,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, arrows: false } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true, centerPadding: "15%", arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerMode: true, centerPadding: "5%", arrows: false, dots: false } }
    ]
  });

  // Lista de imágenes para la galería de eventos
  const [eventos] = useState([
    { id: 1, src: "/img/05-img-galeria2/1.jpeg", titulo: "Boda Sofía & Martín" },
    { id: 2, src: "/img/05-img-galeria2/1a.jpg", titulo: "Fiesta Corporativa" },
    { id: 3, src: "/img/05-img-galeria2/2.jpeg", titulo: "Cumpleaños de Valentina" },
    { id: 4, src: "/img/05-img-galeria2/2a.jpg", titulo: "Evento Social" },
    { id: 5, src: "/img/05-img-galeria2/3.jpeg", titulo: "Fiesta de 15" },
    { id: 6, src: "/img/05-img-galeria2/3a.jpg", titulo: "Aniversario Empresarial" },
    { id: 7, src: "/img/05-img-galeria2/4.jpeg", titulo: "Gala de Fin de Año" },
    { id: 8, src: "/img/05-img-galeria2/4a.jpg", titulo: "Evento Privado" },
    { id: 9, src: "/img/05-img-galeria2/5.jpeg", titulo: "Cena Formal" },
    { id: 10, src: "/img/05-img-galeria2/5a.jpg", titulo: "Fiesta Temática" },
    { id: 11, src: "/img/05-img-galeria2/6.jpeg", titulo: "Concierto en Vivo" },
    { id: 12, src: "/img/05-img-galeria2/6a.jpg", titulo: "Jornada Gastronómica" },
    { id: 13, src: "/img/05-img-galeria2/7.jpeg", titulo: "Exposición de Arte" },
    { id: 14, src: "/img/05-img-galeria2/8.jpeg", titulo: "Reunión de Negocios" },
    { id: 15, src: "/img/05-img-galeria2/9.jpeg", titulo: "Conferencia Empresarial" },
    { id: 16, src: "/img/05-img-galeria2/10.jpeg", titulo: "Evento Exclusivo" }
  ]);

  useEffect(() => {
    const handleResize = () => setSettings(prev => ({ ...prev, arrows: window.innerWidth > 768 }));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleImageError = (e) => {
    e.target.src = "/img/placeholder-eventos.jpg";
    e.target.alt = "Imagen no disponible";
    e.target.style.objectFit = "contain";
    e.target.style.padding = "1rem";
  };

  return (
    <section className="galeria-eventos">
      <div className="galeria-header">
        <h2>Galería de Eventos</h2>
        <p>Revive los mejores momentos de nuestros eventos</p>
      </div>

      <div className="galeria-slider">
        <Slider {...settings}>
          {eventos.map((evento) => (
            <div key={evento.id} className="evento-card">
              <div className="evento-imagen-container">
                <img
                  src={evento.src}
                  alt={evento.titulo}
                  className="evento-imagen"
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>
              <div className="evento-info">
                <h3>{evento.titulo}</h3>
                <button className="evento-btn">Ver más</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default GaleriaEventos;
