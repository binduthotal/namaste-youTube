import { createSlice } from "@reduxjs/toolkit";

const filterSearchSlice = createSlice({
    name: "searchFilterVideos",
    initialState: {
        videos: []
    },
    reducers: {
        filteredVideoResults: (state, action) => {
            state.videos = action.payload;
        },
        clearFilter: (state) =>{
            state.videos = [];
        }
    },
});

export const { filteredVideoResults,clearFilter } = filterSearchSlice.actions;
export default filterSearchSlice.reducer;
