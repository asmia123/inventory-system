import React from "react";
import cartSlice from "../../store/cart-slice.js";
import CartItem from "./cart";
import { useDispatch, useSelector } from "react-redux";
import { PhotoURL } from "../../config/url-constant";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <>
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
                        <td>
                          <div>
                            <button
                              onClick={() =>
                                dispatch(
                                  cartSlice.actions.incrementQuantity(item._id)
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
                                cartSlice.actions.decrementQuantity(item._id)
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
    </>
  );
};

export default Cart;
