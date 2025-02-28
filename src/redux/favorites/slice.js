import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  favorites: [],
};

const favsSlice = createSlice({
  name: "favs",
  initialState: INITIAL_STATE,
  reducers: {
    addFavs: (state, action) => {
      state.favorites =[...state.favorites, action.payload];
    },
    removeFavs: (state, action) => {
      state.favorites = state.favorites.filter(item => item !== action.payload);
    },
  },
});

export const { addFavs, removeFavs } = favsSlice.actions;

export default favsSlice.reducer;
