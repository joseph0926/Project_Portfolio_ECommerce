import { createSlice, current } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { search: "", searchStatus: "all", searchType: "all" },
  reducers: {
    clearFilters: (state) => {
      state.search = "";
    },
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
  },
});

export const searchAction = searchSlice.actions;

export default searchSlice;
