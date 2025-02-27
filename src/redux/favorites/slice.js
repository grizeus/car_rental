import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  favorites: [],
};

const favsSlice = createSlice({
  name: "favs",
  initialState: INITIAL_STATE,
  reducers: {
    addFavs: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export default favsSlice;
