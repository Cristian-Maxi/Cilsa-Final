import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css';
import guitarra from '../../assets/guitarra.jpg'
import bateria from '../../assets/bateria.jpg'
import clarinet from '../../assets/clarinet.jpg'
import amplificador from '../../assets/amplificador.jpg'
import syntetizador from '../../assets/syntetizador.jpg'
import piano from '../../assets/piano.jpg'

const Body = () => {
  return (
    <div className="body-container">
      <h1 className="title">Instrumentos</h1>
      <div className="grid-container">
        <Link to="/instrumentos" className="grid-item">
          <img src={guitarra} alt="Instrumento 1" />
        </Link>
        <Link to="/instrumentos" className="grid-item">
          <img src={bateria} alt="Instrumento 2" />
        </Link>
        <Link to="/instrumentos" className="grid-item">
          <img src={amplificador} alt="Instrumento 3" />
        </Link>
        <Link to="/instrumentos" className="grid-item">
          <img src={piano} alt="Instrumento 4" />
        </Link>
        <Link to="/instrumentos" className="grid-item">
          <img src={clarinet} alt="Instrumento 5" />
        </Link>
        <Link to="/instrumentos" className="grid-item">
          <img src={syntetizador} alt="Instrumento 6" />
        </Link>
      </div>
    </div>
  );
};

export default Body;