import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BsList,
  BsHouseDoor,
  BsCameraFill,
  BsStarFill,
  BsFillPersonLinesFill,
  BsListTask,
  BsCalendarEvent
} from "react-icons/bs";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../assets/scss/_03-Componentes/_Header.scss";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleToggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Asignamos un color único a cada ícono
  const eventLinks = [
    { path: "/", icon: <BsHouseDoor />, label: "Inicio", color: "#FF5252" },
    { path: "/galeria", icon: <BsCameraFill />, label: "Galería", color: "#FFD740" },
    { path: "/testimonios", icon: <BsStarFill />, label: "Testimonios", color: "#FF9100" },
    { path: "/servicios", icon: <BsFillPersonLinesFill />, label: "Servicios", color: "#69F0AE" },
    { path: "/planificacion", icon: <BsListTask />, label: "Planificación", color: "#40C4FF" },
    { path: "/eventos", icon: <BsCalendarEvent />, label: "Eventos", color: "#E040FB" }
  ];

  return (
    <header className="heyou-header">
      <div className="header-accent"></div>
      
      <Navbar expand="lg" className="header-navbar">
        <Container className="header-container">
          {/* Logo Heyou! */}
          <Navbar.Brand as={Link} to="/" className="header-logo">
            <img 
              src="/img/02-logos/logoheyoueventos.png" 
              alt="Heyou! Eventos"
              className="logo-image"
            />
          </Navbar.Brand>

          {/* Botón de menú hamburguesa SOLO para móvil */}
          <Navbar.Toggle
            aria-controls="main-navbar"
            onClick={handleToggleMobileMenu}
            className="menu-toggle d-lg-none"
          >
            <BsList className="menu-icon" />
            <span className="menu-label">Menú</span>
          </Navbar.Toggle>

          {/* Menú principal - siempre visible en desktop */}
          <Navbar.Collapse id="main-navbar" className="navbar-menu">
            <Nav className="nav-links">
              {eventLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  style={{ "--icon-color": link.color }}
                >
                  <span className="nav-icon">{link.icon}</span>
                  <span className="nav-label">{link.label}</span>
                  <span className="nav-underline"></span>
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;