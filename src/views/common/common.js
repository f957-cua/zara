import React, { useEffect, useState, useTransition } from "react";
import "./index.css";
import Cards from "../../components/cards/cards";

const filterBySearch = (podcasts, search) =>
  podcasts.filter((item) =>
    item?.["im:name"].label.concat(item?.["im:artist"].label).includes(search)
  );

const CommonView = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [search, setSearch] = useState("");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )
      .then((res) => res.json())
      .then(({ feed }) => setPodcasts(feed.entry));
  }, []);

  const handleSearch = (e) => {
    startTransition(() => setSearch(e.target.value));
  };

  return (
    <>
      <div className="common_block">
        {isPending && <div className="pending"></div>}
        <h2>{filterBySearch(podcasts, search).length}</h2>
        <input className="input" onChange={handleSearch} />
      </div>
      <Cards podcasts={filterBySearch(podcasts, search)} />
    </>
  );
};

export default CommonView;
