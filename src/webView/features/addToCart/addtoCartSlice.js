// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));

const initialState = cartFromLocalStorage
  ? cartFromLocalStorage
  : {
      user: null,
      orderedproducts: [],
    };
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addUserToCart: (state, action) => {
      state.user = action.payload;
    },

    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.orderedproducts.find(item => item.product === newItem.product);

      if (!existingItem) {
        state.orderedproducts.push(newItem);
      }
       else {
        existingItem.quantity += 1
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.orderedproducts = state.orderedproducts.filter(item => item.product !== productId);
    },
    updateCartItem: (state, action) => {
      const { product, quantity, color, size } = action.payload;
      const existingItem = state.orderedproducts.find(item => item.product === product);

      if (existingItem) {
        existingItem.quantity = quantity;
        existingItem.color = color;
        existingItem.size = size;
      }
    },
  },
});

export const { addUserToCart, addToCart, removeFromCart, updateCartItem } = cartSlice.actions;
export default cartSlice.reducer;
