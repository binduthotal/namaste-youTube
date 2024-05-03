import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/sideBarSlice";

const Header = () => {
    const dispatch = useDispatch();
    
    const handleSideBar = () => {
        dispatch(toggleMenu());
    };
    
    return (
        <div className="flex w-[100%] justify-between items-center p-2">
            <div className="flex items-center px-5">
                <img
                    className="h-8 mr-4 cursor-pointer"
                    alt="menu"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
                    onClick={handleSideBar}
                />
                <a href="/">
                    <img
                        className="h-14"
                        alt="logo"
                        src="https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg"
                    />
                </a>
            </div>
            <div className="flex items-center ">
                <input
                    className="rounded-3xl border border-solid rounded-r-none border-gray-400 w-96 py-2 px-3 focus:outline-blue-700"
                    type="text"
                    placeholder="Search"
                />
                <button className=" px-3 border border-solid border-gray-400 border-l-0 cursor-pointer  rounded-3xl rounded-l-none text-gray-500">
                    <img
                        className="h-10"
                        alt="search"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/VisualEditor_-_Icon_-_Search.svg/1200px-VisualEditor_-_Icon_-_Search.svg.png"
                    />
                </button>
            </div>
            <div>
                <img
                    alt="user"
                    className="cursor-pointer px-5 h-8"
                    src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
                />
            </div>
        </div>
    );
};

export default Header;
