import React from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import "../main.css";
import { CategoriesURL, PhotoURL } from "../../../config/url-constant";
const Viewproducts = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      const response = await fetch(CategoriesURL + `/${params.categoryId}`);
      const responseData = await response.json();
      console.log(responseData.category.title);
      setProducts(responseData);
    };
    fetchproducts();
  }, []);
  const deleteproducts = async (id) => {
    const response = await fetch(CategoriesURL + `/${id}`, {
      method: "DELETE",
    });
    const responseData = await response.json();
    console.log(responseData);
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
                    <h3 class="card-title">
                      {products?.category?.title}
                    </h3>
                    <div class="card-tools">
                      <Link to="/addproduct">
                        <i class="fas fa-plus"></i> &nbsp; Add Product
                      </Link>
                    </div>
                  </div>

                  <div class="card-body p-0">
                    <table class="table">
                      <thead>
                        <tr style={{ padding: "15px" }}>
                        <th>Photo</th>
                          <th>Title</th>
                          <th>Summary</th>
                          
                          <th style={{ width: "40px", paddingLeft: "190px" }}>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {products?.product?.length === 0 ? (
                          <>
                            <tr>
                              <td>No Product found in this category</td>
                            </tr>
                          </>
                        ) : (
                          products?.product?.map((product) => (
                            <>
                              <tr key={product._id}>
                                <td>
                                  <img
                                    class="image"
                                    src={
                                      PhotoURL +
                                      product.photo
                                    }
                                    alt="Product Image"
                                  />
                                </td>
                                <td style={{ padding: "25px" }}>
                                  {product.title}
                                </td>
                                <td style={{ padding: "25px" }}>
                                  {product.summary}
                                </td>
                                <td
                                  style={{
                                    padding: "25px",
                                    textAlign: "center",
                                  }}
                                >
                                  <Link to={`/viewproduct/${product._id}`}>
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
                                    onClick={() => deleteproducts(product._id)}
                                  ></i>
                                </td>
                              </tr>
                            </>
                          ))
                        )}
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

export default Viewproducts;
