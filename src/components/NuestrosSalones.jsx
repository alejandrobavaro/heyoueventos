import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaMapMarkerAlt, FaWifi, FaParking, FaUtensils, FaVideo, FaMusic } from "react-icons/fa";
import { GiPartyPopper, GiSoundWaves } from "react-icons/gi";
import "../assets/scss/_03-Componentes/_NuestrosSalones.scss";

const NuestrosSalones = () => {
  const salones = [
    {
      id: 1,
      nombre: "Heyou Platinum",
      imagen: "/img/07-img-galeria4-salon/2025-04-05 027.jpg",
      galeria: [
        "/img/galeria/platinum/1.jpg",
        "/img/galeria/platinum/2.jpg",
        "/img/galeria/platinum/3.jpg",
        "/img/galeria/platinum/4.jpg"
      ],
      descripcion: "Nuestro salón insignia con arquitectura moderna y tecnología de punta, diseñado para eventos de alta gama.",
      ubicacion: "Av. del Evento 1234, Centro",
      capacidad: "500 personas",
      precio: "Desde $15,000",
      caracteristicas: [
        { icono: <FaUsers />, texto: "Capacidad: 500 personas" },
        { icono: <FaMapMarkerAlt />, texto: "Ubicación privilegiada en el centro" },
        { icono: <FaWifi />, texto: "WiFi empresarial de alta velocidad" },
        { icono: <FaParking />, texto: "Estacionamiento para 150 vehículos" },
        { icono: <FaVideo />, texto: "Pantallas LED y sistema de proyección 4K" },
        { icono: <GiSoundWaves />, texto: "Sistema de sonido profesional" }
      ],
      serviciosExtra: [
        "Catering premium incluido",
        "Coordinador de evento dedicado",
        "Valet parking",
        "Terraza panorámica con bar"
      ],
      video: "https://www.youtube.com/embed/ejemplo1"
    },
    {
      id: 2,
      nombre: "Heyou Garden",
      imagen: "/img/07-img-galeria4-salon/2025-04-26 082.jpg",
      galeria: [
        "/img/galeria/garden/1.jpg",
        "/img/galeria/garden/2.jpg",
        "/img/galeria/garden/3.jpg"
      ],
      descripcion: "Un oasis en la ciudad, perfecto para bodas y eventos al aire libre con un toque de naturaleza.",
      ubicacion: "Camino de los Pioneros 567, Zona Norte",
      capacidad: "250 personas",
      precio: "Desde $10,000",
      caracteristicas: [
        { icono: <FaUsers />, texto: "Capacidad: 250 personas" },
        { icono: <FaMapMarkerAlt />, texto: "Entorno natural privilegiado" },
        { icono: <GiPartyPopper />, texto: "Ambientación floral incluida" },
        { icono: <FaUtensils />, texto: "Cocina equipada para catering" },
        { icono: <FaMusic />, texto: "Escenario al aire libre" },
        { icono: <FaParking />, texto: "Estacionamiento amplio" }
      ],
      serviciosExtra: [
        "Jardín botánico privado",
        "Carpa climatizada opcional",
        "Iluminación decorativa profesional",
        "Zona lounge con muebles premium"
      ],
      video: "https://www.youtube.com/embed/ejemplo2"
    },
    {
      id: 3,
      nombre: "Heyou Urban",
      imagen: "/img/07-img-galeria4-salon/2025-04-26 105.jpg",
      galeria: [
        "/img/galeria/urban/1.jpg",
        "/img/galeria/urban/2.jpg",
        "/img/galeria/urban/3.jpg",
        "/img/galeria/urban/4.jpg",
        "/img/galeria/urban/5.jpg"
      ],
      descripcion: "Diseño industrial chic en el corazón financiero, ideal para eventos corporativos y sociales vanguardistas.",
      ubicacion: "Calle Modernidad 891, Distrito Financiero",
      capacidad: "350 personas",
      precio: "Desde $12,000",
      caracteristicas: [
        { icono: <FaUsers />, texto: "Capacidad: 350 personas" },
        { icono: <FaMapMarkerAlt />, texto: "Ubicación céntrica con fácil acceso" },
        { icono: <FaWifi />, texto: "WiFi empresarial ilimitado" },
        { icono: <FaVideo />, texto: "Sistema audiovisual integrado" },
        { icono: <GiSoundWaves />, texto: "Sonido profesional para conferencias" },
        { icono: <FaParking />, texto: "Valet parking incluido" }
      ],
      serviciosExtra: [
        "Puesto de fotografía instantánea",
        "Realidad virtual para presentaciones",
        "Barra de cócteles signature",
        "Mobiliario modular adaptable"
      ],
      video: "https://www.youtube.com/embed/ejemplo3"
    }
  ];

  return (
    <section className="heyou-salones">
      {/* Hero Section */}
      <div className="salones-hero">
        <div className="hero-overlay"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="title">Descubrí Nuestros <span>Espacios Exclusivos</span></h1>
          <p className="lead">
            Cada salón Heyou está diseñado para crear experiencias únicas y memorables
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container">
        {salones.map((salon) => (
          <motion.div 
            key={salon.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="salon-detalle"
          >
            {/* Salon Header */}
            <div className="salon-header">
              <h2>{salon.nombre}</h2>
              <div className="salon-meta">
                <span className="precio">{salon.precio}</span>
                <span className="capacidad">{salon.capacidad}</span>
                <span className="ubicacion">{salon.ubicacion}</span>
              </div>
              <div className="gradient-bar"></div>
            </div>

            {/* Main Salon Info */}
            <div className="salon-main">
              {/* Gallery */}
              <div className="salon-gallery">
                <div className="main-image">
                  <img src={salon.imagen} alt={`Vista principal ${salon.nombre}`} />
                </div>
                <div className="thumbnails">
                  {salon.galeria.map((img, index) => (
                    <div key={index} className="thumbnail">
                      <img src={img} alt={`${salon.nombre} vista ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="salon-description">
                <h3>El Espacio</h3>
                <p>{salon.descripcion}</p>
                
                <div className="caracteristicas-grid">
                  {salon.caracteristicas.map((item, index) => (
                    <div key={index} className="caracteristica">
                      <div className="caracteristica-icono">{item.icono}</div>
                      <p>{item.texto}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Tour */}
            <div className="salon-video">
              <h3>Tour Virtual</h3>
              <div className="video-container">
                <iframe 
                  src={salon.video}
                  title={`Tour virtual ${salon.nombre}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Servicios Extra */}
            <div className="servicios-extra">
              <h3>Servicios Exclusivos</h3>
              <div className="servicios-grid">
                {salon.serviciosExtra.map((servicio, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="servicio-item"
                  >
                    <div className="servicio-content">
                      <p>{servicio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="salon-cta">
              <button className="heyou-btn heyou-btn--primary">
                Consultar disponibilidad
              </button>
              <button className="heyou-btn heyou-btn--secondary">
                Solicitar presupuesto
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Global CTA */}
      <div className="global-cta">
        <h3>¿No encontraste lo que buscabas?</h3>
        <p>Tenemos soluciones personalizadas para cada necesidad</p>
        <button className="heyou-btn heyou-btn--gradient">
          Contactar a un asesor
        </button>
      </div>
    </section>
  );
};

export default NuestrosSalones;