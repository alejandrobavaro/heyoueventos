import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../assets/scss/_03-Componentes/_GaleriaSalones.scss";

function GaleriaSalones() {
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
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, arrows: false }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: "15%", arrows: false }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: "5%", arrows: false, dots: false }
      }
    ]
  });

  const [salones] = useState([
    { id: 1, src: "/img/07-img-galeria4-salon/2025-04-05%20024.jpg", nombre: "Salón Diamante", capacidad: "300 personas", ubicacion: "Centro Convenciones" },
    { id: 2, src: "/img/07-img-galeria4-salon/2025-04-05%20025.jpg", nombre: "Salón Esmeralda", capacidad: "150 personas", ubicacion: "Zona Norte" },
    { id: 3, src: "/img/07-img-galeria4-salon/2025-04-05%20026.jpg", nombre: "Salón Rubí", capacidad: "200 personas", ubicacion: "Distrito Financiero" },
    { id: 4, src: "/img/07-img-galeria4-salon/2025-04-05%20027.jpg", nombre: "Salón Zafiro", capacidad: "120 personas", ubicacion: "Área Histórica" },
    { id: 5, src: "/img/07-img-galeria4-salon/2025-04-05%20028.jpg", nombre: "Salón Oro", capacidad: "250 personas", ubicacion: "Centro de Eventos" },
    { id: 6, src: "/img/07-img-galeria4-salon/2025-04-05%20049.jpg", nombre: "Salón Plata", capacidad: "180 personas", ubicacion: "Zona Hotelera" }
  ]);

  useEffect(() => {
    const handleResize = () => {
      setSettings((prev) => ({ ...prev, arrows: window.innerWidth > 768 }));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleImageError = (e) => {
    e.target.src = "/img/placeholder-salones.jpg";
    e.target.alt = "Imagen no disponible";
    e.target.style.objectFit = "contain";
    e.target.style.padding = "1rem";
  };

  return (
    <section className="heyou-galeria-salones">
      <div className="galeria-salones-header">
        <h2>Nuestros Salones</h2>
        <p>Espacios exclusivos para crear momentos inolvidables</p>
      </div>

      <div className="galeria-salones-slider">
        <Slider {...settings}>
          {salones.map((salon) => (
            <div key={salon.id} className="salon-card">
              <div className="salon-imagen-container">
                <img
                  src={salon.src}
                  alt={`Salón ${salon.nombre}`}
                  className="salon-imagen"
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>
              <div className="salon-info">
                <h3>{salon.nombre}</h3>
                <div className="salon-datos">
                  <p><span className="salon-icono">👥</span> {salon.capacidad}</p>
                  <p><span className="salon-icono">📍</span> {salon.ubicacion}</p>
                </div>
                <button className="salon-btn">Ver detalles</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default GaleriaSalones;
