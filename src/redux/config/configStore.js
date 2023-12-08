import { configureStore } from '@reduxjs/toolkit';
import markerReducer from '../modules/markerSlice';
import searchReducer from '../modules/searchSlice';

const store = configureStore({
  reducer: {
    marker: markerReducer,
    search: searchReducer
  }
});

export default store;
