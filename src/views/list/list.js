import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css";

const ListView = () => {
  return (
    <>
      <h1>listView</h1>
      <Outlet />
    </>
  );
};

export default ListView;
