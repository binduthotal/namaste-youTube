import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./sideBarSlice"
import searchSlice from "./searchSlice";
import filterSearchSlice from "./filterSearchSlice";

const store = configureStore({
    reducer : {
        app: appSlice,
        search:searchSlice,
        searchFilterVideos:filterSearchSlice
    }
})

export default store;