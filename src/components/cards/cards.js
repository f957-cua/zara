import React from "react";
import "./index.css";

import { Link } from "react-router-dom";

const Cards = ({ podcasts = [] }) => {
  return (
    <ul className="cards">
      {podcasts.map((card, idx, arr) => (
        <Link
          to={`podcast/${card?.id.attributes["im:id"]}`}
          key="{card?.id.attributes['im:id']}"
          state={card}
        >
          <li className="card">
            <img
              src={card?.["im:image"][2].label}
              alt={card?.["im:name"].label}
              className="card_img"
            />
            <h2>{card?.["im:name"].label}</h2>
            <p>{card?.["im:artist"].label}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Cards;
