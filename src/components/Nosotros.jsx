import React from "react";
import { motion } from "framer-motion";
import "../assets/scss/_03-Componentes/_Nosotros.scss";

const Nosotros = () => {
  const equipo = [
    {
      id: 1,
      nombre: "Alejandro Heyou",
      rol: "Directora Creativa",
      descripcion: "Especialista en diseño de eventos con más de 10 años de experiencia en la industria.",
      imagen: "/img/07-img-galeria4-salon/2025-04-26 105.jpg"
    },
    {
      id: 2,
      nombre: "Miguel Heyou",
      rol: "Coordinador General",
      descripcion: "Encargado de que cada detalle se ejecute a la perfección el día del evento.",
      imagen: "/img/07-img-galeria4-salon/2025-04-26 080.jpg"
    },
    {
      id: 3,
      nombre: "Gondra Heyou",
      rol: "Chef Ejecutiva",
      descripcion: "Creadora de experiencias gastronómicas memorables para cada ocasión.",
      imagen: "/img/07-img-galeria4-salon/2025-04-26 076.jpg"
    }
  ];

  const salones = [
    {
      id: 1,
      nombre: "Heyou Platinum",
      imagen: "/img/07-img-galeria4-salon/2025-04-05 027.jpg",
      descripcion: "Nuestro salón insignia con capacidad para 500 personas, tecnología de última generación y terraza panorámica.",
      ubicacion: "Av. del Evento 1234, Centro"
    },
    {
      id: 2,
      nombre: "Heyou Garden",
      imagen: "/img/07-img-galeria4-salon/2025-04-26 082.jpg",
      descripcion: "Espacio al aire libre rodeado de naturaleza, ideal para eventos íntimos y ceremonias.",
      ubicacion: "Camino de los Pioneros 567, Zona Norte"
    },
    {
      id: 3,
      nombre: "Heyou Urban",
      imagen: "/img/07-img-galeria4-salon/2025-04-26 105.jpg",
      descripcion: "Diseño industrial y moderno en el corazón de la ciudad para eventos corporativos y sociales.",
      ubicacion: "Calle Modernidad 891, Distrito Financiero"
    }
  ];

  return (
    <section className="heyou-nosotros">
      {/* Hero Section */}
      <div className="nosotros-hero">
        <div className="hero-overlay"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="title">Heyou Eventos: <span>Donde los momentos se vuelven leyenda</span></h1>
          <p className="lead">
            Somos un equipo apasionado que transforma visiones en experiencias inolvidables.
          </p>
        </motion.div>
      </div>

      {/* Historia Section */}
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="historia-section"
        >
          <div className="historia-content">
            <h2>Nuestra Historia</h2>
            <div className="gradient-bar"></div>
            <p>
              Fundada en 2015, Heyou Eventos nació de la visión de reinventar la industria de eventos en la región.
              Comenzamos como un pequeño equipo con grandes sueños y hoy somos referentes en creación de experiencias memorables.
            </p>
            <p>
              Lo que nos diferencia es nuestra atención meticulosa al detalle y nuestra capacidad para entender y superar
              las expectativas de nuestros clientes. Cada evento es una nueva oportunidad para crear magia.
            </p>
          </div>
          <div className="historia-imagen">
            <img src="/img/02-logos/logoheyoueventos.png" alt="Fundadores de Heyou Eventos" />
          </div>
        </motion.div>

        {/* Equipo Section */}
        <div className="equipo-section">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Conoce al Equipo
          </motion.h2>
          <p className="subtitle">Los magos detrás de cada experiencia</p>
          
          <div className="equipo-grid">
            {equipo.map((miembro) => (
              <motion.div
                key={miembro.id}
                className="miembro-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: miembro.id * 0.1 }}
              >
                <div className="miembro-imagen">
                  <img src={miembro.imagen} alt={miembro.nombre} />
                  <div className="miembro-overlay">
                    <p>{miembro.descripcion}</p>
                  </div>
                </div>
                <h3>{miembro.nombre}</h3>
                <p className="rol">{miembro.rol}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Salones Section */}
        <div className="salones-section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="salones-header"
          >
            <h2>Nuestros Espacios Exclusivos</h2>
            <p className="subtitle">Salones diseñados para inspirar</p>
            <div className="gradient-bar"></div>
          </motion.div>

          <div className="salones-grid">
            {salones.map((salon) => (
              <motion.div
                key={salon.id}
                className="salon-card"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: salon.id * 0.1 }}
              >
                <div className="salon-imagen">
                  <img src={salon.imagen} alt={salon.nombre} />
                </div>
                <div className="salon-info">
                  <h3>{salon.nombre}</h3>
                  <p>{salon.descripcion}</p>
                  <div className="salon-ubicacion">
                    <span>📍</span> {salon.ubicacion}
                  </div>
                  <button className="heyou-btn">Ver más detalles</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="video-section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2>Viví la Experiencia Heyou</h2>
            <div className="gradient-bar"></div>
            <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qgZ2QGY8Zzw?si=guVx7g5UIiBswb_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;