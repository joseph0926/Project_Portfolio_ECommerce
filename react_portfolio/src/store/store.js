import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./slice/ui-slice";
import cartSlice from "./slice/cart-slice";
import searchSlice from "./slice/search-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, search: searchSlice.reducer, cart: cartSlice.reducer },
});

export default store;
