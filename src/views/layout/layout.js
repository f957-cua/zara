import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.css";

const Layout = () => {
  return (
    <>
      <header className="container">
        <Link to="/">Home</Link>
        <Link to="podcast">Podcast</Link>
        <Link to="podcast/episode">Episode</Link>
        <h1>Podcasts</h1>
        <br />
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
