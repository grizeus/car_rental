import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  brand: null,
  rentalPrice: null,
  minMileage: null,
  maxMileage: null,
};

const filterSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter: (state, action) => {
      state = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice;
