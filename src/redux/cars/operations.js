import { createAsyncThunk } from "@reduxjs/toolkit";
import FetchInstance from "../../api/api";

export const fetchCars = createAsyncThunk(
  "cars/getCars",
  async (_, thunkAPI) => {
    try {
      const { data } = await FetchInstance.get(`/cars?limit=12&page=1`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMore = createAsyncThunk(
  "cars/getMoreCars",
  async (options, thunkAPI) => {
    const query = Object.entries(options)
      .filter(([, value]) => value !== null)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    try {
      const { data } = await FetchInstance.get(`/cars?${query}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchResults = createAsyncThunk(
  "cars/getSearch",
  async (options, thunkAPI) => {
    const query = Object.entries(options)
      .filter(([, value]) => value !== null)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    try {
      const { data } = await FetchInstance.get(`/cars?${query}`);
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
      const { data } = await FetchInstance.get(`/cars/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
