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
import Testimonios from "./components/Testimonios"; 
import Servicios from "./components/Servicios";

import GaleriaSalones from "./components/GaleriaSalones";
import Nosotros from "./components/Nosotros";
import NuestrosSalones from "./components/NuestrosSalones";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app-background"></div>
        <div className="app-frame"></div>

        <Header />

        <main className="main-content">
          <div className="content-wrapper">
            <Routes>
              {/* Home */}
              <Route path="/" element={<MainHome />} />
              <Route path="/inicio" element={<MainHome />} />

              {/* Nuevas páginas */}
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/salones" element={<NuestrosSalones />} />
              <Route path="/testimonios" element={<Testimonios />} />
              <Route path="/servicios" element={<Servicios />} />
             
              <Route path="/galeriasalones" element={<GaleriaSalones />} />
              <Route path="/galeriaeventos" element={<GaleriaEventos />} />

              {/* Existentes */}
              <Route path="/contacto" element={<Contacto />} />

              {/* Legacy / fallback */}
              <Route path="/galeria" element={<GaleriaEventos />} />

              {/* 404 -> Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>

        <Footer />
        <WhatsappFloat />
      </div>
    </Router>
  );
}

export default App;
