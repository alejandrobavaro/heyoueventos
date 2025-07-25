import React, { useState } from "react"; // Asegúrate de importar useState
import "../assets/scss/_03-Componentes/_EventosDestacados.scss";

function EventosDestacados() { // Cambiar de Novedades a EventosDestacados
  const [eventos] = useState([
    {
      id: 1,
      titulo: "Boda Elegante",
      imagen: "/img/eventos/boda.jpg",
      fecha: "15 Octubre 2023",
      descripcion: "Una boda sofisticada en las afueras de la ciudad"
    },
    // Agrega más eventos según necesites
  ]);

  return (
    <section className="eventos-destacados">
      <h2>Eventos Destacados</h2>
      <div className="eventos-container">
        {eventos.map(evento => (
          <div key={evento.id} className="evento-card">
            <img src={evento.imagen} alt={evento.titulo} className="evento-imagen" />
            <div className="evento-info">
              <h3>{evento.titulo}</h3>
              <p className="evento-fecha">{evento.fecha}</p>
              <p>{evento.descripcion}</p>
              <button className="evento-btn">Ver Detalles</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventosDestacados; // Exportar con el nombre correcto