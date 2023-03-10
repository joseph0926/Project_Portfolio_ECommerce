import { createSlice, current } from "@reduxjs/toolkit";

const getLocal = () => {
  let cart = localStorage.getItem("cart");
  console.log(cart);
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: getLocal(),
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      console.log(newItem);
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.items = existingItem;
      }
      state.totalQuantity++;
      console.log(state.items);
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
      state.items = [];
      localStorage.removeItem("cart");
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

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cartItems: [],
//     amount: 0,
//     total: 0,
//   },
//   reducers: {
//     addToCart: (state, { payload }) => {
//       const cart = current(state.cartItems);
//       const newItem =
//       const itemInCart = cart.find((item) => item.id === payload.id);
//       if (itemInCart) {
//         itemInCart.amount++;
//       } else {
//         cart.push({ ...payload, amount: 1 });
//       }
//     },
//     clearCart: (state) => {
//       state.cartItems = [];
//     },
//     removeItem: (state, action) => {
//       const itemId = action.payload;
//       state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
//     },
//     increase: (state, { payload }) => {
//       const cartItem = state.cartItems.find((item) => item.id === payload.id);
//       cartItem.amount = cartItem.amount + 1;
//     },
//     decrease: (state, { payload }) => {
//       const cartItem = state.cartItems.find((item) => item.id === payload.id);
//       cartItem.amount = cartItem.amount - 1;
//     },
//     calculateTotals: (state) => {
//       let amount = 0;
//       let total = 0;
//       state.cartItems.forEach((item) => {
//         amount += item.amount;
//         total += item.amount * item.price;
//       });
//       state.amount = amount;
//       state.total = total;
//     },
//   },
// });

export const cartActions = cartSlice.actions;

export default cartSlice;
