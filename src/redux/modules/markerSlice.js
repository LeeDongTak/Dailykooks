import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  markers: [],
  hoveredMarkerId: '',
  selectedMarker: {}
};

const markerSlice = createSlice({
  name: 'marker',
  initialState,
  reducers: {
    setMarkers: (state, action) => {
      state.markers = [...action.payload];
    },
    setHoveredMarker: (state, action) => {
      state.hoveredMarkerId = action.payload;
    },
    setSelectedMarker: (state, action) => {
      const selectedId = action.payload;
      const marker = state.markers.find((item) => item?.id === selectedId);
      state.selectedMarker = marker;
      console.log(state.selectedMarker);
    }
  }
});

export const { setMarkers, setHoveredMarker, setSelectedMarker } = markerSlice.actions;
export default markerSlice.reducer;
