import { configureStore } from "@reduxjs/toolkit";
import template from "../modules/templateSlice";

const store = configureStore({
  reducer: { template },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
