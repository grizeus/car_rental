import { createSlice } from "@reduxjs/toolkit";
import {
  fetchBrands,
  fetchCarById,
  fetchCars,
  fetchMore,
  fetchResults,
} from "./operations";

const INITIAL_STATE = {
  cars: [],
  brands: [],
  current: null,
  isLoading: false,
  page: 1,
  totalPages: 1,
};

const pendingHandler = state => {
  state.isLoading = true;
};
const rejectHandler = state => {
  state.isLoading = false;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, pendingHandler)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload.cars;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(fetchCars.rejected, rejectHandler)
      .addCase(fetchResults.pending, pendingHandler)
      .addCase(fetchResults.fulfilled, (state, action) => {
        state.cars = action.payload.cars;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(fetchResults.rejected, rejectHandler)
      .addCase(fetchMore.pending, pendingHandler)
      .addCase(fetchMore.fulfilled, (state, action) => {
        state.cars = [...state.cars, ...action.payload.cars];
        state.isLoading = false;
      })
      .addCase(fetchMore.rejected, rejectHandler)
      .addCase(fetchBrands.pending, pendingHandler)
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBrands.rejected, rejectHandler)
      .addCase(fetchCarById.pending, pendingHandler)
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.current = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCarById.rejected, rejectHandler);
  },
});

export default carsSlice.reducer;
