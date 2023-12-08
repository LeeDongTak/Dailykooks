import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hoveredMarker: '',
  selectedMarker: ''
};

const markerSlice = createSlice({
  name: 'marker',
  initialState,
  reducers: {
    setHoveredMarker: (state, action) => {
      state.hoveredMarker = action.payload;
    },
    setSelectedMarker: (state, action) => {
      state.selectedMarker = action.payload;
    }
  }
});

export const { setHoveredMarker, setSelectedMarker } = markerSlice.actions;
export default markerSlice.reducer;
