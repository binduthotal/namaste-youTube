import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBarToolTip = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    if(isMenuOpen) {
        document.getElementById("watchContainer").style.opacity = 1;
    }

    return (
        <div className="pl-8 pt-3 bg-white col-span-1">
            <div className="py-2">
                <ul>
                    <li className="p-1 cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-1 cursor-pointer">Shorts</li>
                    <li className="p-1 cursor-pointer">Videos</li>
                    <li className="p-1 cursor-pointer">Live</li>
                </ul>
            </div>
            <hr className=""></hr>
            <div className="py-2">
                <h1 className="font-bold text-lg p-1">Subscriptions</h1>
                <ul>
                    <li className="p-1 cursor-pointer">Music</li>
                    <li className="p-1 cursor-pointer">Sports</li>
                    <li className="p-1 cursor-pointer">Gaming</li>
                    <li className="p-1 cursor-pointer">Movies</li>
                </ul>
            </div>
            <hr className=""></hr>
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

export default SideBarToolTip;
