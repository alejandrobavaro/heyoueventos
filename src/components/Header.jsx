import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BsList,
  BsHouseDoor,
  BsCameraFill,
  BsStarFill,
  BsFillPersonLinesFill,
  BsListTask,
  BsCalendarEvent,
  BsInfoCircle,
  BsBuildings
} from "react-icons/bs";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../assets/scss/_03-Componentes/_Header.scss";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleToggleMobileMenu = () =>
    setIsMobileMenuOpen((prev) => !prev);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const eventLinks = [
    { path: "/", icon: <BsHouseDoor />, label: "Inicio", color: "#FF5252" },
    { path: "/nosotros", icon: <BsInfoCircle />, label: "Nosotros", color: "#7C4DFF" },
    { path: "/salones", icon: <BsBuildings />, label: "Salones", color: "#00BFA5" },
    { path: "/testimonios", icon: <BsStarFill />, label: "Testimonios", color: "#FF9100" },
    { path: "/servicios", icon: <BsFillPersonLinesFill />, label: "Servicios", color: "#69F0AE" },
    { path: "/contacto", icon: <BsFillPersonLinesFill />, label: "Contacto", color: "#F06292" },
  ];
  

  return (
    <header className="heyou-header">
      <div className="header-accent"></div>

      <Navbar
        expand="lg"
        className="header-navbar"
        expanded={isMobileMenuOpen}
        onToggle={setIsMobileMenuOpen}
      >
        <Container className="header-container">
          {/* Logo Heyou! */}
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="header-logo"
            onClick={closeMobileMenu}
          >
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
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                style={{ "--icon-color": link.color }}
              >
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-label">{link.label}</span>
                <span className="nav-underline"></span>
              </NavLink>
            ))}
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
