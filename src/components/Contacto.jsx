import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "../assets/scss/_03-Componentes/_Contacto.scss";

const Contacto = () => {
  return (
    <section className="heyou-contacto">
      {/* Hero Section */}
      <div className="contacto-hero">
        <div className="hero-overlay"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="title">Contactanos</h1>
          <p className="lead">
            Estamos listos para hacer de tu evento una experiencia inolvidable
          </p>
          <div className="gradient-bar"></div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="contacto-grid">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="form-container"
          >
            <h2>Envíanos un mensaje</h2>
            <form className="contacto-form">
              <div className="form-group">
                <input type="text" placeholder="Nombre completo" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Correo electrónico" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Teléfono" />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Tipo de evento</option>
                  <option value="boda">Boda</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="cumpleanos">Cumpleaños</option>
                  <option value="social">Evento Social</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Cuéntanos sobre tu evento" rows="5" required></textarea>
              </div>
              <button type="submit" className="heyou-btn">
                Enviar consulta
              </button>
            </form>
          </motion.div>

          {/* Info Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="info-container"
          >
            <div className="logo-container">
              <img 
                src="/img/02-logos/logoheyoueventos.png" 
                alt="Heyou Eventos" 
                className="logo-img"
              />
            </div>

            <div className="contacto-info">
              <h3>Información de contacto</h3>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h4>Ubicación</h4>
                  <p>Av. del Evento 1234, Centro, Mar del Plata</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <h4>Teléfono</h4>
                  <p>+54 223 1234-5678</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaWhatsapp />
                </div>
                <div className="info-content">
                  <h4>WhatsApp</h4>
                  <p>+54 223 8765-4321</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>info@heyoueventos.com</p>
                </div>
              </div>
            </div>

            <div className="social-media">
              <h3>Seguinos en redes</h3>
              <div className="social-icons">
                <motion.a
                  whileHover={{ y: -5 }}
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{ backgroundColor: '#3b5998' }}
                >
                  <FaFacebook />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{ background: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)' }}
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{ backgroundColor: '#FF0000' }}
                >
                  <FaYoutube />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mapa */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mapa-container"
        >
          <h3>Encontranos aquí</h3>
          <div className="mapa">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889528!2d-58.383759!3d-34.603734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjQiUyA1OMKwMjMnMDEuNSJX!5e0!3m2!1sen!2sar!4v1620000000000!5m2!1sen!2sar" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Ubicación Heyou Eventos"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacto;