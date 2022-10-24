import React from "react";
import {
  container,
  cancel,
  title,
  containerCard,
  icon,
} from "./card.module.css";

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código

  return (
    <div className={container}>
      <button className={cancel} onClick={onClose}>
        X
      </button>
      <p className={title}>{name}</p>
      <div className={containerCard}>
        <div>
          <p>Max</p>
          <p>{`${max}°C`}</p>
        </div>
        <div>
          <p>Min</p>
          <p>{`${min}°C`}</p>
        </div>
      </div>
      <img
        className={icon}
        alt={img}
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
      />
    </div>
  );
}
