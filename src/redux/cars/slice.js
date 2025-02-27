import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands, fetchCarById, fetchCars } from "./operations";

const INITIAL_STATE = {
  cars: [],
  brands: [],
  current: null
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload.cars;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.current = action.payload;
      });
  },
});

export default carsSlice.reducer;
