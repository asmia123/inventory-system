import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer';
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    // totalCount: 0,
    // subAmount: 0,
    // totalAmount: 0,
  },
  reducers: {
    updateItem: (state, action) => {
      console.log({ state, action })
      const index = state.cart.findIndex(item => item.id === action.payload.itemObj.id);
      if (index !== -1) {
        state.cart = state.cart.map((content) => content.id === action.payload.itemObj.id ? { ...content, quantity: content.quantity + 1 } : content)
      } else {
        state.cart = [...state.cart, action.payload.itemObj]
      }
      console.log('state', state.cart)
    }
  }
  // getCartProducts: (state, action) => {
  //   return {
  //     ...state,
  //   };
  // },

  // incrementQuantity: (state, action) => {
  //   const item = state.cart.find((item) => item.id === action.payload);
  //   item.quantity++;
  // },
  // decrementQuantity: (state, action) => {
  //   const item = state.cart.find((item) => item.id === action.payload);
  //   if (item.quantity === 1) {
  //     item.quantity = 1;
  //   } else {
  //     item.quantity--;
  //   }
  // },
  // removeItem: (state, action) => {
  //   const removeItem = state.cart.filter(
  //     (item) => item.id !== action.payload
  //   );
  //   state.cart = removeItem;
  // },
  // getCartCount: (state, action) => {
  //   let cartCount = state.cart.reduce((total, item) => {
  //     return item.quantity + total;
  //   }, 0);
  //   state.totalCount = cartCount;
  // },
  // getSubTotal: (state, action) => {
  //   state.subAmount = state.cart.reduce((acc, item) => {
  //     return acc + item.price * item.quantity;
  //   }, 0);
  // },
  // },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
