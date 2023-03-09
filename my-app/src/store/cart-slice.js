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
    // addToCart: (state, action) => {
      addItem: (state, action) => {
        state.cart.push(action.payload);
      },
      updateItem: (state, action) => {
        const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
        if (itemIndex !== -1) {
          state.cart[itemIndex] = action.payload;
        }
      },
      // Immer reducer with array update
      setArray: produce((state, action) => {
  state.cart = action.payload;
      }),
      // Immer reducer with array push
      pushToArray: produce((state, action) => {
        state.cart = [action.payload.itemObj]
        // state.cart.push(action.payload);
      })
    },
//       const updatedItem = action.payload.itemObj;
//       return {
//         ...state,
//         cart: state.cart.map(item => {
//           if (item.id === updatedItem.id) {
//   console.log(updatedItem);
// //            return updatedItem;
//           } else {
//   return { ...state, cart: [...state.cart, updatedItem] }
// //             return item;
//           }
//         })
//       };
      // console.log(action.payload);
      // console.log(state.cart);
      // if(state.cart == undefined){
      //   console.log(action.payload.itemObj);
      //   return { ...state, cart: state.cart.concat(action.payload.itemObj) }
      //   // return {
      //   //   ...state,
      //   //   cart: [...state.cart, action.payload.itemObj],
      //   // }
      // }else{
      //   let itemExists = false;
      // const newState = state.cart.map(item => {
      //   const newItem = { ...item };
      //   if (newItem.id === action.payload.itemObj.id) {
      //     itemExists = true;
      //     newItem.item.quantity = item.quantity + 1;
      //   }
      //   return newItem;
      // });
      
      // if (!itemExists) newState.push(action.payload.itemObj);
      // console.log(newState);
      // return newState;
      // }
      // console.log(action.payload);
      // console.log(state.cart)
      // let itemExists = false;
      // const newState = state.cart?.map(item => {
      //   const newItem = { ...item };
      //   if (newItem.id === action.payload.id) {
      //     itemExists = true;
      //     newItem.item.qty = item.qty + 1;
      //   }
      //   return newItem;
      // });
      
      // if (!itemExists) newState.push(action.payload);
      
      // return newState;
     
      // if(state.cart.length){
        // const itemIndex = state.cart.find(item => item.id === action.payload.itemObj._id);
        // if (itemIndex) {
        //   return state.cart.map((item, i) => ({
        //     ...item,
        //     item: {
        //       ...item,
        //       quantity: item.quantity + (itemIndex === i ? 1 : 0),
        //     }
        //   }));
        // } else {
        //   return [...state.cart, action.payload];
        // }
      // }else{
      //   console.log("cart is empty");
      // }
      
//      console.log(action.payload);
// // state.cart.push(action.payload);
//       console.log(state.cart);
//       const itemInCart = state.cart.find(
//         (item) => item.id === action.payload.id
//       );
//       if (itemInCart) {
//         itemInCart.quantity++;
//       } else {
//         state.cart.push(action.payload);
//         // state.cart.push({ ...action.payload, quantity: 1 });
//         // console.log(state.cart);
//         state.totalCount=state.totalCount+1;
       
//       }

    // },
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
