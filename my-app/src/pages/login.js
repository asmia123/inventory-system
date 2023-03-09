import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import loginSlice from "../store/login-slice";
import { toast } from "react-toastify";
import Signup from "./signup";
import ForgetPassword from "./forgetPassword";
var userinfo = JSON.parse(localStorage.getItem("user")); 
const login = (values) => async (dispatch) => {
  
console.log(values);
    
    const res = fetch("http://localhost:3000/auth/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            toast.error("user not found");
          }
          if (response.status === 401) {
            toast.error("Wrong Credientials");
          }
        } else {
          return response.json();
        }
      })
      .then((responseJson) => {
        localStorage.setItem("token", responseJson.token);
        localStorage.setItem("user", JSON.stringify(responseJson.user));
        dispatch(loginSlice.actions.login({token: responseJson.token, user: userinfo}));
        

        const token = localStorage.getItem("token");
       
        toast.success("Successfully Login");
      })
      .catch((error) => {
        // setError(error);
        console.error(error);
      });
    }

const validate = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string().required("Password is a required field"),
  });

function Login() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const token = useSelector((state)=>state.login.token);
  const user = useSelector((state)=>state.login.user);
  useEffect(() => {
    console.log(isLoggedIn);
    console.log(token);
    console.log(user?.intro);
    if(isLoggedIn && token && user?.intro==="admin" ){
      navigate("/category");
    }
    else if(isLoggedIn && token && user?.intro==="user"){
      navigate("/panel");
    }
    else{
      navigate("/login");
    }
  },[isLoggedIn
  ,token,user]);
  const onSubmit = async (values, actions) => {
    console.log(values);
    dispatch(login(values));

      // navigate("/signup");
   
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  return (
    <Formik
      validationSchema={validate}
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <div class="hold-transition login-page">
          <div class="login-box">
            <div class="card card-outline card-primary">
              <div class="card-header text-center">
                <h1 class="h1">
                  <b>Login</b>
                </h1>
              </div>
              <div className="card-body">
                <p className="login-box-msg">Log in to start your session</p>

                <Form>
                  <div className="input-group mb-3">
                    <input
                      class="form-control"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Enter email"
                      id="email"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                  {errors.email && touched.email && errors.email}
                  <div className="input-group mb-3">
                    <input
                      class="form-control"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Enter password"
                      //   className="form-control"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock" />
                      </div>
                    </div>
                  </div>
                  {errors.password && touched.password && errors.password}
                  <div className="row">
                    <div className="col-8">
                      <div className="icheck-primary">
                        {/* <Checkbox name="remember" type="checkbox" /> */}
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember Me</label>
                      </div>
                    </div>
                    {/* /.col */}
                    <div className="col-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        // disabled={!validate}
                      >
                        Login
                      </button>
                    </div>
                    {/* /.col */}
                  </div>
                </Form>
                <p className="mb-1">
                  <Link to="/forgetpassword" element={<ForgetPassword />}>
                    Forget Password
                  </Link>
                </p>
                <p className="mb-0">
                  <Link to="/" element={<Signup />}>
                    Register a new membership
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default Login;
