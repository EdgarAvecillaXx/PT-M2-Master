import React from 'react';
import Card from "./Card";
import "../css/cards.css";

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map
  const cards = cities.map((city, i) => (
    <Card
      key={i}
      max={city.main.temp_max}
      min={city.main.temp_min}
      name={city.name}
      img={city.weather[0].icon}
      onClose={() => alert(city.name)}></Card>
  ));
  return <div className="cards-container">{cards}</div>;
};