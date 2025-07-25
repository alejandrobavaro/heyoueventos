import React from "react";
import { motion } from "framer-motion";
import "../assets/scss/_03-Componentes/_Servicios.scss";

const Servicios = () => {
  const servicios = [
    {
      id: 1,
      icono: "🍽️",
      titulo: "Catering Gourmet",
      descripcion: "Gastronomía de autor elaborada con productos premium por chefs especializados. Menús personalizados para cada evento.",
      color: "#FF5252"
    },
    {
      id: 2,
      icono: "🎶",
      titulo: "DJ & Sonido",
      descripcion: "Staff de DJs profesionales con equipos de última generación y diseño de iluminación espectacular.",
      color: "#FFD740"
    },
    {
      id: 3,
      icono: "🛋️",
      titulo: "Ambientación",
      descripcion: "Mobiliario estilo 'Tiffany' y asesoramiento con diseñadores para crear la atmósfera perfecta.",
      color: "#FF9100"
    },
    {
      id: 4,
      icono: "📸",
      titulo: "Fotografía & Video",
      descripcion: "Cobertura profesional con equipos de alta gama y edición creativa para capturar cada momento.",
      color: "#69F0AE"
    },
    {
      id: 5,
      icono: "🚌",
      titulo: "Transporte",
      descripcion: "Flota de vehículos exclusivos para el traslado seguro de tus invitados.",
      color: "#40C4FF"
    },
    {
      id: 6,
      icono: "📋",
      titulo: "Coordinación",
      descripcion: "Planificación integral con un coordinador dedicado desde la idea inicial hasta el día del evento.",
      color: "#E040FB"
    },
    {
      id: 7,
      icono: "🍹",
      titulo: "Cocktelería",
      descripcion: "Barras móviles con mixólogos profesionales y cócteles signature diseñados para tu evento.",
      color: "#1DE9B6"
    },
    {
      id: 8,
      icono: "🅿️",
      titulo: "Estacionamiento",
      descripcion: "Parking privado con valet service y seguridad las 24 horas para mayor comodidad.",
      color: "#FF5252"
    }
  ];

  const serviciosExtra = [
    { id: 1, nombre: "Cabina Fotográfica", icono: "📸" },
    { id: 2, nombre: "Espejo Mágico", icono: "🪞" },
    { id: 3, nombre: "Pista LED", icono: "💡" },
    { id: 4, nombre: "Show de Luces", icono: "✨" },
    { id: 5, nombre: "Realidad Virtual", icono: "👓" },
    { id: 6, nombre: "Mesa de Dulces", icono: "🍬" }
  ];

  return (
    <section className="heyou-servicios">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="servicios-header"
        >
          <h1 className="title">Servicios Exclusivos</h1>
          <p className="lead">
            Descubrí todo lo que podemos ofrecerte para hacer de tu evento una experiencia única
          </p>
          <div className="gradient-bar"></div>
        </motion.div>

        <div className="servicios-grid">
          {servicios.map((servicio) => (
            <motion.div
              key={servicio.id}
              className="servicio-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: servicio.id * 0.1 }}
            >
              <div 
                className="servicio-icono"
                style={{ backgroundColor: servicio.color }}
              >
                {servicio.icono}
              </div>
              <h3>{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
              <button 
                className="servicio-btn"
                style={{ color: servicio.color }}
              >
                Más información
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="servicios-extra"
        >
          <h3>Experiencias Premium</h3>
          <p className="subtitle">Servicios especiales para eventos memorables</p>
          
          <div className="extra-grid">
            {serviciosExtra.map((item) => (
              <motion.div 
                key={item.id}
                className="extra-item"
                whileHover={{ scale: 1.05 }}
              >
                <div className="extra-icono">{item.icono}</div>
                <p>{item.nombre}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Servicios;