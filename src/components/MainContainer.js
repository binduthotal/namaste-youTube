import React from "react";
import {  useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={`${isMenuOpen ? "col-span-11" : "col-span-12"} mb-8 mx-10`}>
      <Outlet />
    </div>
  );
};

export default MainContainer;
