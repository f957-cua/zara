import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const CommonView = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="podcast">Podcast</Link>
        <Link to="podcast/episode">Episode</Link>
      </header>
      <h1>CommonView</h1>
    </>
  );
};

export default CommonView;
