import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.css";

const Layout = () => {
  return (
    <>
      <header className="container">
        <Link to="/">
          <h1>Podcasts</h1>
        </Link>
        <br />
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
