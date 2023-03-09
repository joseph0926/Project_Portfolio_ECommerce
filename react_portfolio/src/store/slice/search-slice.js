import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { inputValue: "" },
  reducers: {
    inputChange(state, action) {
      state.inputValue = action.payload;
    },
    clearInput(state) {
      state.inputValue = "";
    },
  },
});

export const searchAction = searchSlice.actions;

export default searchSlice;
