import React from 'react';
import "../css/card.css";

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código

  return (
    <div className="container-card">
      <button className="card--cancel" onClick={onClose}>
        X
      </button>
      <p className="card--title">{name} </p>
      <div id="container-card--temp">
        <div>
          <p>Max</p>
          <p>{max}</p>
        </div>
        <div>
          <p>Min</p>
          <p>{min}</p>
        </div>
      </div>
      <img
        className="card--img"
        alt={img}
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
      />
    </div>
  );
};