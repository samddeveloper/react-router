import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="services-title">Reiki Behandling</h2>
      <p className="services-description">
        Reiki är en japansk teknik för stressreduktion och avslappning som också främjar läkning. Det utövas genom att "lägga på händerna" och är baserat på idén om att en osynlig "livskraftenergi" flödar genom oss och är det som får oss att vara vid liv.
      </p>
      <div className="service">
        <h3>60 minuters behandling</h3>
        <p>Upplev en djupt avslappnande och helande behandling.</p>
        <p className="service-price">Pris: 500kr</p>
        <Link to="/book" className="service-button">Boka nu</Link>
      </div>
    </div>
  );
};

export default Services;
