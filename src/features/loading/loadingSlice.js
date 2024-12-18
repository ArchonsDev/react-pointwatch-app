import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    start: (state) => {
        state.value = true;
    },
    stop: (state) => {
        state.value = false;
    }
  }
});

export const { start, stop } = loadingSlice.actions;

export default loadingSlice.reducer;