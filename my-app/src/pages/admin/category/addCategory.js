import React, { useContext, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CategoriesURL } from "../../../config/url-constant";
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

function Addcategory() {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    console.log(values);
    let res = await fetch(CategoriesURL, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      .then((response) => {
        response.json();
        if (response.status === 201) {
          toast.success(`Category added successfully`);
          navigate("/category");
        }
      })
      .catch((error) => {
        toast.error("Something invalid happened");
        console.error(error);
      });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  return (
    <Formik
      validationSchema={validate}
      initialValues={{
        title: "",
        content: null,
      }}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        setFieldValue,
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
                <p className="login-box-msg">Add a Category</p>

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
                        <span className="fas fa-user" />
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
                        <span className="fas fa-user" />
                      </div>
                    </div>
                  </div>
                  {errors.content && touched.content && (
                    <div className="error">{errors.content}</div>
                  )}
                  
                  <div className="row">
                    <div className="col-8"></div>
                    {/* /.col */}
                    <div className="col-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        disabled={!validate}
                      >
                        Add
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

export default Addcategory;
