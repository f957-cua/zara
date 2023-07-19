import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";

const ListView = () => {
  const { state } = useLocation();

  return (
    <div className="podcasts_container">
      <div className="card_container">
        <img
          className="card_view"
          src={state?.["im:image"][2].label}
          alt={state?.["im:name"].label}
        />
        <p className="card_author">{state?.["im:artist"].label}</p>
        {/* <h2 className="card_podcast">by {state?.["im:name"].label}</h2> */}
        <h2 className="card_podcast">by SongExploder</h2>
        {/* <p className="card_description">{state?.summary}</p> */}
        <p className="card_description">summary...</p>
      </div>
      <div className="box_container">
        <h2>Episodes: </h2>
        <ul className="episode_container">
          <li className="episode_box">
            <p className="episode_item">Title</p>
            <p className="episode_item">Release date</p>
          </li>
          <li className="episode_box">
            <p className="episode_item">Podcasts titles</p>
            <p className="episode_item">11/08/2021</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListView;
