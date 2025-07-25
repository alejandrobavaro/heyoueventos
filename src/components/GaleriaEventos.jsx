import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../assets/scss/_03-Componentes/_GaleriaEventos.scss";

function GaleriaEventos() {
  // Configuración base del slider
  const baseSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: false, // Desactivamos arrows por defecto (los manejamos en el effect)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '15%',
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '5%',
          arrows: false,
          dots: false
        }
      }
    ]
  };

  const [settings, setSettings] = useState(baseSettings);

  const [fotos] = useState([
    { id: 1, src: "/img/03-img-banners/banner1.png", category: "Show en vivo" },
    { id: 2, src: "/img/03-img-banners/banner2.png", category: "Ensayos" },
    { id: 3, src: "/img/03-img-banners/banner3.png", category: "Backstage" }
  ]);


  useEffect(() => {
    const handleResize = () => {
      // Actualizamos el estado con los nuevos settings
      setSettings({
        ...baseSettings,
        arrows: window.innerWidth > 768
      });
    };

    // Ejecutamos al montar y añadimos listener
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageError = (e) => {
    e.target.src = '/img/03-img-banners/banner3.png';
    e.target.alt = 'Imagen no disponible';
    e.target.style.objectFit = 'contain';
    e.target.style.padding = '1rem';
  };

  return (
    <section className="galeria-fotos">
      <div className="galeria-header">
        <h2>Galería de la Banda</h2>
        <p>Momentos especiales en el escenario y detrás de cámaras</p>
      </div>

      <div className="galeria-slider-container">
        <Slider {...settings}>
          {fotos.map((foto) => (
            <div key={foto.id} className="foto-container">
              <div className="foto-item">
                <img
                  src={foto.src}
                  alt={`Foto ${foto.id}`}
                  className="foto-imagen"
                  loading="lazy"
                  onError={handleImageError}
                />
                {foto.category && (
                  <div className="foto-overlay">
                    <span className="foto-categoria">{foto.category}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default GaleriaEventos;