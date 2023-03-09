import React from "react";
import "../main.css";
import { useState, useEffect } from "react";
import { ItemsURL, PhotoURL } from "../../config/url-constant";
import cartSlice from "../../store/cart-slice.js"
import { useDispatch } from 'react-redux';
//TODO: remove this responseData 
const responseData = [
	{
    _id: 1,
		title: 'Amazing digital art',
		price:2,
		summary: 'hello',
		profile: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg',
	},
	{
    _id: 2,
		title: 'Ribbon Hunter',
		price: 4,
		summary: 'hello',
		profile: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg',
	},
	{
    _id: 3,
		title: 'Amazing digital art',
		price: 5,
		priceNumber: 2.45,
		summary: 'hello',
		profile: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg',
	},
	{
    _id: 4,
		title: 'Amazing digital art',
		price: 3,
		summary: 'hello',
		profile: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg'
	},
	{
    _id: 5,
		title: 'Ribbon Hunter',
		price: 9,
		summary: 'hello',
		profile: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg',
	}
]

const UserPanel = () => {

        const [items, setItems] = useState([]);
        const dispatch = useDispatch();
        useEffect(() => {
          fetchitems();
        }, []);
        const fetchitems = async () => {
          // const response = await fetch(ItemsURL);
          // const responseData = await response.json();
          // console.log(responseData);
          
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
          //console.log(itemObj);
          dispatch(cartSlice.actions.updateItem({itemObj}));
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
       <div class="img"><img src={ item.profile} alt="User Image" /></div>
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
