import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filters: {
    brand: null,
    rentalPrice: null,
    minMileage: null,
    maxMileage: null,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
