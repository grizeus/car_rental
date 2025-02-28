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
      state.filters = action.payload;
    },
  },
});

export const { changeFilter, setPage, setTotal } = filterSlice.actions;

export default filterSlice.reducer;
