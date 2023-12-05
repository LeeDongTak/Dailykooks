import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    template: 'asdfasdf'
}

const templateSlice = createSlice({
    name: "template",
    initialState,
    reducers: {}
})

export const {} = templateSlice.actions;
export default templateSlice.reducer;
