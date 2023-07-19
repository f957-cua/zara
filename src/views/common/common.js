import React, { useEffect, useState } from "react";
import "./index.css";
import Cards from "../../components/cards/cards";

const filterBySearch = (podcasts, search) => podcasts.filter(item => item?.["im:name"].label.concat(item?.["im:artist"].label).includes(search))

const CommonView = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )
      .then((res) => res.json())
      .then(({ feed }) => setPodcasts(feed.entry));
  }, []);

  return (
    <>
      <div className="common_block">
        <h2>
          {
            filterBySearch(
              podcasts,
              search
            ).length
          }
        </h2>
        <input
          className="input"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <Cards
        podcasts={filterBySearch(
          podcasts,
          search
        )}
      />
    </>
  );
};

export default CommonView;
