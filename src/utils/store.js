import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./sideBarSlice"
import searchSlice from "./searchSlice";
import filterSearchSlice from "./filterSearchSlice";
import chatSlice from "./chatSlice";
import darkModeSlice from "./darkModeSlice";

const store = configureStore({
    reducer : {
        app: appSlice,
        search:searchSlice,
        searchFilterVideos:filterSearchSlice,
        chat:chatSlice,
        darkMode:darkModeSlice
    }
})

export default store;