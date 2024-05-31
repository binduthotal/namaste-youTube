import React from "react";
import {  useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={`${isMenuOpen ? "md:col-span-11 col-span-12" : " col-span-12 md:col-span-12"} mb-8 md:mx-10 mx-1`}>
      <Outlet />
    </div>
  );
};

export default MainContainer;
