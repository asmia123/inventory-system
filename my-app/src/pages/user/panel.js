import React from "react";
import "../main.css";
import { useState, useEffect } from "react";
import { ItemsURL, PhotoURL } from "../../config/url-constant";
import cartSlice from "../../store/cart-slice.js"
import { useDispatch } from 'react-redux';
const UserPanel = () => {
        const [items, setItems] = useState([]);
        const dispatch = useDispatch();
        useEffect(() => {
          fetchitems();
        }, []);
        const fetchitems = async () => {
          const response = await fetch(ItemsURL);
          const responseData = await response.json();
          console.log(responseData);
          setItems(responseData);
        };
       
        const addToCart = (item) => {
          const itemObj = {
            id: item._id,
            title: item.title,
            price: item.price,
            profile: item.profile,
            quantity: 1
          }
          console.log(itemObj);
          dispatch(cartSlice.actions.pushToArray({itemObj}));
          // dispatch(getCartCount())
          // dispatch(getSubTotal())
          // dispatch(calculateTax())
          // dispatch(getTotalAmount())
        }
  return (
    <div>
      <div class="section2">
    <div class="container">
      {items.map((item)=>(<>
      <div key={item._id}></div>
        <div class="items">
       <div class="img"><img src={PhotoURL + item.profile} alt="User Image" /></div>
        <div class="name">{item.title}   {item?.brand_id?.title}</div>
        <div class="price">{item.price}</div>
        {/* <div class="name"></div> */}
           <div class="info">{item.summary}</div>
           
           <button style={{ "marginTop":"5px" , "marginLeft": "45px" }} class="btn btn-primary" 
           onClick={() => {addToCart(item)}}>Add to Cart
          </button>
         </div>
      </>))}
      </div></div>
    </div>
  );
};

export default UserPanel;
