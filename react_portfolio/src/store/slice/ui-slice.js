import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isModalOpen: true, isLoading: false },
  reducers: {
    loading(state) {
      state.isLoading = true;
    },
    endLoading(state) {
      state.isLoading = false;
    },
    modalOpen(state) {
      state.isModalOpen = true;
    },
    modalClose(state) {
      state.isModalOpen = false;
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
