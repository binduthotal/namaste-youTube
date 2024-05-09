import React from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearFilter } from "../utils/filterSearchSlice";

const SideBar = () => {

  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return
  if (!isMenuOpen) return null;

  const handleReset = () => {
    dispatch(clearFilter());
  }
  return (
    <div className="col-span-1  w-fit">
      <div className="py-2">
        <ul>
          <li className="p-1 cursor-pointer">
            <Link to="/" onClick={handleReset}>Home</Link>
          </li>
          <li className="p-1 cursor-pointer">Shorts</li>
          <li className="p-1 cursor-pointer">Videos</li>
          <li className="p-1 cursor-pointer">Live</li>
        </ul>
      </div>
      <hr className="w-fit"></hr>
      <div className="py-2">
        <h1 className="font-bold text-lg p-1">Subscriptions</h1>
        <ul>
          <li className="p-1 cursor-pointer">Music</li>
          <li className="p-1 cursor-pointer">Sports</li>
          <li className="p-1 cursor-pointer">Gaming</li>
          <li className="p-1 cursor-pointer">Movies</li>
        </ul>
      </div>
      <hr className="w-fit"></hr>
      <div className="py-2">
        <h1 className="font-bold text-lg p-1">Watch Later</h1>
        <ul>
          <li className="p-1 cursor-pointer">Music</li>
          <li className="p-1 cursor-pointer">Sports</li>
          <li className="p-1 cursor-pointer">Gaming</li>
          <li className="p-1 cursor-pointer">Movies</li>
        </ul>
      </div>
      <hr className=""></hr>
    </div>
  );
};

export default SideBar;
