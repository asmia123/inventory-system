import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ItemsURL, PhotoURL } from "../../../config/url-constant";
const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchitems();
  }, []);
  const fetchitems= async () => {
    const response = await fetch(ItemsURL);

    const responseData = await response.json();
    console.log(responseData);
    setItems(responseData);
  };

  const deleteItem = async (id) => {
    console.log(id);

    const response = await fetch(ItemsURL + `/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        // response.json();
        if (response.status === 204) {
          toast.success("Item deleted Successfully");
          fetchitems();
        } else {
          toast.error(`Item doesn't delete `);
        }
      })

      .catch((error) => {
        toast.error(`Something went wrong`);
        console.error(error);
      });
  };

  return (
    <div>
      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Items</h1>
              </div>
            </div>
          </div>
        </section>

        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">All Items</h3>
                    <div class="card-tools">
                      <Link to="/additem">
                        <i class="fas fa-plus" />
                        &nbsp; Add Items
                      </Link>
                    </div>
                  </div>

                  <div class="card-body p-0">
                    <table class="table">
                      <thead>
                        <tr style={{ padding: "15px" }}>
                          <th>Product</th>
                          <th>Brand</th>
                          <th>Profile</th>
                          <th style={{ paddingLeft: "50px" }}>Title</th>
                          <th>Price</th>
                          <th>Discount</th>
                          <th>Quantiy</th>
                          <th>Sold</th>
                          <th>Available</th>
                          <th>Defective</th>
                          <th style={{ width: "40px", paddingLeft: "50px" }}>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item) => (
                          <>
                            <tr key={item._id}>
                              
                              <td style={{ padding: "25px" }}>{item?.product_id?.title}</td>
                              <td style={{ padding: "25px" }}>{item?.brand_id?.title}</td>
                              <td><img
                                  class="image"
                                  src={
                                    PhotoURL +
                                    item.profile
                                  }
                                  alt="User Image"
                                /></td>
                              <td style={{ padding: "25px" }}>
                                {item.title}
                              </td>
                              
                              <td style={{ padding: "25px" }}>{item.price}</td>
                              <td style={{ padding: "25px" }}>
                                {item.discount}
                              </td>
                              <td style={{ padding: "25px" }}>{item.quantity}</td>
                              <td style={{ padding: "25px" }}>{item.sold}</td>
                              <td style={{ padding: "25px" }}>{item.available}</td>
                              <td style={{ padding: "25px" }}>{item.defective}</td>
                              
                              <td style={{ padding: "25px" }}>
                                <Link to={`/items/${item._id}`}>
                                  <span>
                                    <i class="fas fa-edit"></i>
                                  </span>
                                </Link>
                              </td>
                              <td style={{ padding: "25px" }}>
                                <i
                                  class="fas fa-trash deleteicon"
                                  onClick={() => deleteItem(item._id)}
                                ></i>
                              </td>
                            </tr>
                          </>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Items;
