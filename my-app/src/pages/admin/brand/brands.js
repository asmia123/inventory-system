import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BrandsURL, PhotoURL } from "../../../config/url-constant";
const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetchbrands();
  }, []);
  const fetchbrands = async () => {
    const response = await fetch(BrandsURL);
    const responseData = await response.json();
    console.log(responseData);
    setBrands(responseData);
  };

  const deletebrand = async (id) => {
    const response = await fetch(BrandsURL + `/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 201) {
          toast.success("Product deleted Successfully");
          fetchbrands();
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
                <h1>Brands</h1>
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
                    <h3 class="card-title">All Brands</h3>
                    <div class="card-tools">
                      <Link to="/addbrand">
                        <i class="fas fa-plus" />
                        &nbsp; Add Brand
                      </Link>
                    </div>
                  </div>

                  <div class="card-body p-0">
                    <table class="table">
                      <thead>
                        <tr style={{ padding: "15px" }}>
                        
                          <th>Title</th>
                          <th>ProductId</th>
                          <th>Summary</th>
                          <th>Content</th>
                          <th style={{ width: "40px", paddingLeft: "190px" }}>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {brands.map((brand) => (
                          <>
                            <tr key={brand._id}>
                            
                              <td style={{ padding: "25px" }}>
                                {brand.title}
                              </td>
                              <td style={{ padding: "25px" }}>
                              {brand?.product_id?.title}
                              </td>
                              <td style={{ padding: "25px" }}>
                                {brand.summary}
                              </td>
                              <td style={{ padding: "25px" }}>
                                {brand.content}
                              </td>
                              <td
                                style={{ padding: "25px", textAlign: "center" }}
                              >
                                <Link to={`/viewbrand/${brand._id}`}>
                                  <span>
                                    <i class="fas fa-eye iconcolor"></i>
                                  </span>
                                </Link>
                              </td>
                              <td style={{ padding: "25px" }}>
                                <Link to={`/brand/${brand._id}`}>
                                  <span>
                                    <i class="fas fa-edit"></i>
                                  </span>
                                </Link>
                              </td>
                              <td style={{ padding: "25px" }}>
                                <i
                                  class="fas fa-trash deleteicon"
                                  onClick={() => deletebrand(brand._id)}
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

export default Brands;
