import React from "react";
import "./index.css";

import { Routes, Route } from "react-router-dom";

import ListView from "./views/list/list.js";
import CommonView from "./views/common/common.js";
import PodcastView from "./views/podcast/podcast.js";
import Layout from "./views/layout/layout.js";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<CommonView />} />
      <Route path="podcast/:podcastId" element={<ListView />}>
        <Route path="episode" element={<PodcastView />} />
      </Route>
    </Route>
  </Routes>
);

export default App;
