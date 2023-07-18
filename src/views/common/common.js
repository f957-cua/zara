import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Cards from "../../components/cards/cards";

const CommonView = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )
      .then((res) => res.json())
      .then(({ feed }) => setPodcasts(feed.entry));
  }, []);

  return (
    <>
      <Cards podcasts={podcasts} />
    </>
  );
};

export default CommonView;
