import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import carsReducer from "./cars/slice";
import filtersReducer from "./filters/slice";
import favReducer from "./favorites/slice";

const favPersistConfig = {
  key: "favs",
  storage,
  whitelist: ["favorites",],
};

const persistedFavConfig = persistReducer(favPersistConfig, favReducer);

const reducers = combineReducers({
  favs: persistedFavConfig,
  cars: carsReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);