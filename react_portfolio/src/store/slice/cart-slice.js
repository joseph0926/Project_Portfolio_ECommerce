import { createSlice } from "@reduxjs/toolkit";

// const getLocal = () => {
//   const data = localStorage.getItem("persist:root");
//   let cart = JSON.parse(data).cart;
//   console.log(cart);
//   if (cart) {
//     console.log(JSON.parse(cart).items);
//     return JSON.parse(cart).items;
//   } else {
//     return [];
//   }
// };

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      console.log(state);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          image: newItem.image[0].url,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.items = existingItem;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 0) {
        this.clearCart(state);
      }
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
    clearCart(state) {
      const data = JSON.parse(localStorage.getItem("persist:root"));
      data.cart = { items: [], totalQuantity: 0 };
      state.items = [];
      state.totalQuantity = 0;
    },
    addItem(state, action) {
      const id = action.payload;
      console.log(id);
      const existingItem = state.items.find((item) => {
        console.log(item.id === id);
        return item.id === id;
      });
      console.log(existingItem);
      state.totalQuantity++;
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.totalPrice + state.items.price;
      console.log(state.items.price);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
