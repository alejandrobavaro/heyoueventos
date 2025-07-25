import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

//------------ESTILOS--------------//
import "./assets/scss/_01-General/_App.scss";

//------------COMPONENTES ESTRUCTURA--------------//
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappFloat from "./components/WhatsappFloat";

//------------RUTAS PÚBLICAS--------------//
import MainHome from "./components/MainHome";
import Contacto from "./components/Contacto";
import GaleriaEventos from "./components/GaleriaEventos";

function App() {
  return (
    <Router>
      {/* Contenedor principal de la aplicación */}
      <div className="app-container">
        {/* Fondo decorativo con efectos */}
        <div className="app-background"></div>
        
        {/* Borde decorativo */}
        <div className="app-frame"></div>
        
        {/* Header de navegación */}
        <Header />
        
        {/* Contenido principal */}
        <main className="main-content">
          {/* Wrapper para centrar el contenido */}
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<MainHome />} />
              <Route path="/inicio" element={<MainHome />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/galeria" element={<GaleriaEventos />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
        
        {/* Footer de la página */}
        <Footer />
        
        {/* Botón flotante de WhatsApp */}
        <WhatsappFloat />
      </div>
    </Router>
  );
}

export default App;