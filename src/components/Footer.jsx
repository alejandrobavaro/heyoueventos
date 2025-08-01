import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/_03-Componentes/_Footer.scss";
import { BsInstagram, BsYoutube, BsFacebook, BsCameraFill, BsCalendarEvent } from "react-icons/bs";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Botón de contacto */}
      <div className="contact-btn-container">
        <Link to="/contacto" className="contact-btn" onClick={scrollToTop}>
          CONTACTO
        </Link>
      </div>

      {/* Botones de Galerías */}
      <div className="footer-links">
        <Link to="/galeriasalones" onClick={scrollToTop} className="footer-link">
          <BsCameraFill className="footer-link-icon" />
          <span>Galería Salones</span>
        </Link>
        <Link to="/galeriaeventos" onClick={scrollToTop} className="footer-link">
          <BsCalendarEvent className="footer-link-icon" />
          <span>Galería Eventos</span>
        </Link>
      </div>

      {/* Redes sociales */}
      <div className="footer-content">
        <div className="social-links-container">
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <BsInstagram className="social-icon" />
              <span>Instagram</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <BsYoutube className="social-icon" />
              <span>YouTube</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <BsFacebook className="social-icon" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>

      {/* Línea decorativa */}
      <div className="baroque-line-bottom"></div>

      {/* Copyright */}
      <div className="copyright-container">
        <div className="copyright-content">
          <a
            href="https://alejandrobavaro.github.io/gondraworld-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="copyright-icon">✧</span>
            <span>Gondra World Dev</span>
            <span className="copyright-icon">✧</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
