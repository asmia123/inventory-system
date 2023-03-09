import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ProductsURL, PhotoURL } from "../../../config/url-constant";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchproducts();
  }, []);
  const fetchproducts = async () => {
    const response = await fetch(ProductsURL);
    const responseData = await response.json();
    console.log(responseData);
    setProducts(responseData);
  };

  const deleteproduct = async (id) => {
    const response = await fetch(ProductsURL + `/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 201) {
          toast.success("Product deleted Successfully");
          fetchproducts();
        } else {
          toast.error(`Product doesn't deleted! Try again`);
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
                <h1>Products</h1>
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
                    <h3 class="card-title">All Products</h3>
                    <div class="card-tools">
                      <Link to="/addproduct">
                        <i class="fas fa-plus" />
                        &nbsp; Add Products
                      </Link>
                    </div>
                  </div>

                  <div class="card-body p-0">
                    <table class="table">
                      <thead>
                        <tr style={{ padding: "15px" }}>
                        <th>Photo</th>
                          <th>Title</th>
                          <th>Category</th>
                          <th>Summary</th>
                          
                          <th style={{ width: "40px", paddingLeft: "190px" }}>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => (
                          <>
                            <tr key={product._id}>
                            <td>
                                <img
                                  class="image"
                                  src={
                                    PhotoURL +
                                    product.profile
                                  }
                                  alt="User Image"
                                />
                              </td>
                              <td style={{ padding: "25px" }}>
                                {product.title}
                              </td>
                              <td style={{ padding: "25px" }}>
                              {product?.category_id?.title}
                              </td>
                              <td style={{ padding: "25px" }}>
                                {product.summary}
                              </td>
                              <td
                                style={{ padding: "25px", textAlign: "center" }}
                              >
                                <Link to={`viewproduct/${product._id}`}>
                                  <span>
                                    <i class="fas fa-eye iconcolor"></i>
                                  </span>
                                </Link>
                              </td>
                              <td style={{ padding: "25px" }}>
                                <Link to={`/product/${product._id}`}>
                                  <span>
                                    <i class="fas fa-edit"></i>
                                  </span>
                                </Link>
                              </td>
                              <td style={{ padding: "25px" }}>
                                <i
                                  class="fas fa-trash deleteicon"
                                  onClick={() => deleteproduct(product._id)}
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

export default Products;
