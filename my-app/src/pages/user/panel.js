import React from "react";
import "../main.css";
import { useState, useEffect } from "react";
import { ItemsURL, PhotoURL } from "../../config/url-constant";
import cartSlice from "../../store/cart-slice.js"
import { useDispatch,useSelector } from 'react-redux';
const UserPanel = () => {
        const [items, setItems] = useState([]);
        const dispatch = useDispatch();
        const cart = useSelector((state) => state.cart.cart);
        const totalAmount = useSelector((state) => state.cart.totalAmount)
        console.log(cart);
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
          dispatch(cartSlice.actions.addToCart({itemObj}));
          // dispatch(cartSlice.actions.getCartCount());
          dispatch(cartSlice.actions.getSubTotal())
          // dispatch(cartSlice.actions.calculateTax())
          // dispatch(cartSlice.actions.getTotalAmount())
        }
  return (
    <div>

<div class="modal fade" id="modal-lg">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Your Cart</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <table class="table">
                <thead>
                  <tr style={{ padding: "15px" }}>
                    <th>Profile</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th style={{ width: "40px", paddingLeft: "50px" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.map((item) => (
                    <>
                      <tr key={item._id} id={item._id}>
                        <td>
                          <img
                            class="image"
                            src={PhotoURL + item.profile}
                            alt="User Image"
                          />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        {/* <td onLoad={()=>dispatch(cartSlice.actions.getSubTotal())}>{item.subAmount}</td> */}
                        <td>
                          <div>
                            <button
                              onClick={() =>
                                dispatch(
                                  cartSlice.actions.incrementQuantity(item)
                                )
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>
                          <button
                            onClick={() =>
                              dispatch(
                                cartSlice.actions.decrementQuantity(item)
                              )
                            }
                          >
                            -
                          </button>
                        </td>
                        <td>
                          {" "}
                          <button
                            onClick={() =>
                              dispatch(cartSlice.actions.removeItem(item.id))
                            }
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                      
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div class = "modal-footer">Total Amount: {totalAmount}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default pull-left"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>




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
