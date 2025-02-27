import { createAsyncThunk } from "@reduxjs/toolkit";
import FetchInstance from "../../api/api";

export const fetchCars = createAsyncThunk(
  "cars/getCars",
  async (options, thunkAPI) => {
    const { brand, rentalPrice, minMileage, maxMileage, page } = options;
    try {
      const { data } = await FetchInstance.get("/cars", {
        brand,
        rentalPrice,
        minMileage,
        maxMileage,
        page,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchBrands = createAsyncThunk(
  "cars/getBrands",
  async (_, thunkAPI) => {
    try {
      const { data } = await FetchInstance.get("/brands");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  "cars/getCarByID",
  async (id, thunkAPI) => {
    try {
      const {data} = await FetchInstance.get(`/cars/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
