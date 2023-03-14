import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer';
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalCount: 0,
    subAmount: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      console.log({ state, action })
      const index = state.cart.findIndex(item => item.id === action.payload.itemObj.id);
      if (index !== -1) {
        state.cart = state.cart.map((content) => content.id === action.payload.itemObj.id ? { ...content, quantity: content.quantity + 1 } : content)
        // 
        state.totalAmount += action.payload.itemObj.price * action.payload.itemObj.quantity;
      } else {
        state.cart = [...state.cart, action.payload.itemObj]
      }
      console.log('totalAmount', state.totalAmount);
      console.log('state', state.cart)
    },
  // }, 
    getCartProducts: (state, action) => {
      return {
        ...state,
      };
    },
    
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      state.totalAmount += action.payload.price * action.payload.quantity;
      item.quantity++;
      console.log('totalAmount', state.totalAmount);
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
        state.totalAmount -= action.payload.price * action.payload.quantity;
        console.log('totalAmount', state.totalAmount);
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
    getCartCount: (state, action) => {
      let cartCount = state.cart.reduce((total, item) => {
        return item.quantity + total;
      }, 0);
      state.totalCount = cartCount;
    },
    getSubTotal: (state, action) => {
      state.subAmount = state.cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
