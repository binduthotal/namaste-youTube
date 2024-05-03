import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./sideBarSlice"

const store = configureStore({
    reducer : {
        app: appSlice,
    }
})

export default store;