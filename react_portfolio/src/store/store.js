import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slice/search-slice";

import uiSlice from "./slice/ui-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, search: searchSlice.reducer },
});

export default store;
