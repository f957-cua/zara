import React from "react";
import "./index.css";

const Cards = ({ podcasts = [] }) => {
  console.log(podcasts[0]?.["im:image"][2].label);
  return (
    <ul className="cards">
      {podcasts.map((card) => (
        <li key="{card?.id.attributes['im:id']}" className="card">
          <img
            src={card?.["im:image"][2].label}
            alt={card?.["im:name"].label}
            className="card_img"
          />
          <h2>{card?.["im:name"].label}</h2>
          <p>{card?.["im:artist"].label}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cards;
