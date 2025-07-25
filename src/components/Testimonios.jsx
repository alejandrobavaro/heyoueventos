import React from "react";
import Slider from "react-slick";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Estilos del slider de slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/scss/_03-Componentes/_Testimonios.scss";

// ------------------ DATOS DE TESTIMONIOS ------------------ //
const testimoniosData = [
  {
    nombre: "María & Juan",
    texto: "¡Nuestra boda fue mágica gracias a Heyou Eventos! Cada detalle estuvo cuidado con tanto amor. No podríamos estar más felices.",
  },
  {
    nombre: "Carolina",
    texto: "Celebrar mi cumpleaños con ustedes fue un sueño hecho realidad. La organización y la energía del equipo son insuperables.",
  },
  {
    nombre: "Pedro & Lucía",
    texto: "Gracias Heyou por hacer de nuestra fiesta algo inolvidable. Todo salió perfecto, ¡fue un día para siempre recordar!",
  },
  {
    nombre: "Gonzalo",
    texto: "Excelente atención y profesionalismo. Supieron entender lo que queríamos y lo hicieron incluso mejor.",
  },
  {
    nombre: "Valentina & Sergio",
    texto: "¡Increíble! Gracias por acompañarnos y hacer que cada momento sea especial. Se sintió todo con mucho cariño.",
  },
  {
    nombre: "Ana",
    texto: "Recomiendo a Heyou Eventos con los ojos cerrados. Su compromiso y creatividad hicieron que todo fluya perfecto.",
  },
  {
    nombre: "Belén & Mateo",
    texto: "Nuestra fiesta fue un éxito rotundo. ¡Gracias por estar atentos a todo y hacer que nos divirtamos sin preocupaciones!",
  },
  {
    nombre: "Laura",
    texto: "El mejor equipo para momentos importantes. Se nota la pasión con la que trabajan.",
  },
  {
    nombre: "Camila & Tomás",
    texto: "Cada instante fue mágico. No tenemos palabras para agradecerles por todo lo que hicieron.",
  },
  {
    nombre: "Florencia",
    texto: "Gracias Heyou por su dedicación. ¡Superaron todas mis expectativas! No me cansaré de recomendarlos.",
  },
  {
    nombre: "Marcos & Sofía",
    texto: "Nos hicieron sentir únicos y especiales. Todo estuvo perfecto, ¡gracias de corazón!",
  },
];

// ------------------ COMPONENTE TESTIMONIOS ------------------ //
const Testimonios = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="testimonios-section">
      {/* Fondo de partículas */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0d0d0d" },
          fpsLimit: 60,
          particles: {
            number: { value: 35, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            opacity: { value: 0.3 },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1.2 },
          },
          detectRetina: true,
        }}
        className="testimonios-particles"
      />

      <div className="testimonios-overlay"></div>
      <h2>Lo que dicen nuestros clientes</h2>
      <Slider {...settings} className="testimonios-slider">
        {testimoniosData.map((item, index) => (
          <div key={index} className="testimonio-card">
            <p className="testimonio-text">“{item.texto}”</p>
            <span className="testimonio-nombre">— {item.nombre}</span>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonios;
