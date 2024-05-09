import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        isDark: false,
    },
    reducers:{
        toggleDarkMode : (state) => {
            state.isDark = !state.isDark;
        }
    }
});

export const {toggleDarkMode} = darkModeSlice.actions;
export default darkModeSlice.reducer;