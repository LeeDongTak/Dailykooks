import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchAddress: ''
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchAddress: (state, action) => {
      state.searchAddress = action.payload;
    }
  }
});

export const { setSearchAddress } = searchSlice.actions;
export default searchSlice.reducer;
