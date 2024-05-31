import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/sideBarSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import { cacheSearchResults } from "../utils/searchSlice";
import { toggleDarkMode } from "../utils/darkModeSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((store) => store.darkMode.isDark);
  /**
   * searchCache = {
   *  "iPhone" : ["iPhone11", "iPhone8", "iPhone"]
   * }
   */
  const searchCache = useSelector((store) => store.search);

  // make api call on every key stroke
  // but diff of the api calls should be > 200ms
  // If time is < 200ms it should decline the call

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);

    /**
     * key i
     * render component
     * useEffect
     * timer starts
     *
     * key ip
     * re-render the componentas the state variable changes
     * calls useEffect
     * new timer starts
     *
     * here new timer starts for every key stroke before the old timer completes,this is performance issue
     *
     * so that we should clear the timer in every key stroke
     */
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const url =
    YOUTUBE_SEARCH_SUGGESTION_API +
    encodeURIComponent(searchQuery);

  const getSuggestions = async () => {
    const data = await fetch(url);
    const json = await data.json();
    setSearchSuggestions(json[1]);

    // Update Cache slice
    dispatch(cacheSearchResults({ [searchQuery]: json[1] }));
  };

  const handleSideBar = () => {
    dispatch(toggleMenu());
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div
      className={
        isDarkTheme
          ? "flex w-[100%] justify-between items-center p-2 fixed bg-gray-900 text-white z-20 top-0"
          : "flex w-[100%] justify-between items-center p-2 fixed bg-white z-20 top-0"
      }
    >
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
      <div onFocus={() => setShowSuggestions(true)} onBlur={handleBlur}>
        <div className="flex items-center w-fit">
          <input
            className="rounded-3xl border border-solid rounded-r-none border-gray-400 w-96 py-2 px-3 focus:outline-blue-700"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Link to={"/results?search_query=" + searchQuery}>
            <button className="mt-1 hover:bg-gray-200 px-3 border border-solid border-gray-400 border-l-0 cursor-pointer  rounded-3xl rounded-l-none text-gray-500">
              <img
                className="h-10"
                alt="search"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/VisualEditor_-_Icon_-_Search.svg/1200px-VisualEditor_-_Icon_-_Search.svg.png"
              />
            </button>
          </Link>
        </div>
        {showSuggestions && (
          <div className="w-96 absolute px-4 py-2 bg-white border border-solid border-gray-200 rounded-lg shadow-lg">
            <ul>
              {searchSuggestions.map((s) => {
                let suggest = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
                return (
                  <Link key={s} to={"/results?search_query=" + suggest}>
                    <li
                      className=" cursor-pointer py-1 hover:bg-gray-200 "
                      onClick={() => {
                        handleSuggestionClick(s);
                      }}
                    >
                      {s}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="flex mr-5">
        <img
          alt="user"
          className="cursor-pointer px-5 h-8"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
        />
        <button
          className="rounded-xl px-2 bg-black text-white"
          onClick={handleDarkMode}
        >
          Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Header;
