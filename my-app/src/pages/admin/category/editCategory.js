import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {CategoriesURL, PhotoURL} from "../../../config/url-constant";
var token = localStorage.getItem("token");
const SUPPORTED_FORMATS = ["image/jpg", "image/png", "image/jpeg", "image/gif"];
// Creating schema
const validate = Yup.object().shape({
    title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Title is required"),
    content: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Content is required"),
   
});

function EditUser() {
  const [category, setCategory] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchcategories = async () => {
      const response = await fetch(CategoriesURL + `/${params.categoryId}`);
      const responseData = await response.json();

      setCategory(responseData);
      console.log(responseData);
    };
    fetchcategories();
  }, []);

  const onSubmit = async (values, actions) => {
    console.log(values);
    
    let res = await fetch(CategoriesURL + `/${params.categoryId}`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
    })
      .then((response) => {
        response.json();
        toast.success("Category updated successfully");
        navigate("/category");
      })

      .catch((error) => {
        console.error(error);
      });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  return (
    <Formik
      validationSchema={validate}
      enableReinitialize={true}
      initialValues={{
        title: category?.category?.title,
        content: category?.category?.content
      }}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
      }) => (
        <div class="hold-transition register-page">
          <div class="register-box">
            <div class="card card-outline card-primary">
              <div class="card-header text-center">
                <h1 class="h1">
                  <b>Category</b>
                </h1>
              </div>

              <div className="card-body">
                <p className="login-box-msg">Update the Category</p>

                <Form>
                  <div className="input-group mb-3">
                    <input
                      className={
                        "form-control" +
                        (errors.title && touched.title
                          ? " is-invalid"
                          : "")
                      }
                      type="text"
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      placeholder="Enter title"
                      id="title"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                  {errors.title && touched.title && (
                    <div className="error">{errors.title}</div>
                  )}
                  
                  <div className="input-group mb-3">
                    <input
                      className={
                        "form-control" +
                        (errors.content && touched.content
                          ? " is-invalid"
                          : "")
                      }
                      type="text"
                      name="content"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.content}
                      placeholder="Enter content"
                      id="content"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                  {errors.content && touched.content && (
                    <div className="error">{errors.content}</div>
                  )}
                  <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        disabled={!validate}
                      >
                        Update
                      </button>
                    </div>
                    {/* /.col */}
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default EditUser;
