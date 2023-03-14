import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import loginSlice from "../store/login-slice";
// import totalCount from "../store/cart-slice";
var user = JSON.parse(localStorage.getItem("user"));

const NavandSide = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const totalCount = useSelector((state) => state.cart.totalCount);
  console.log(totalCount);
  const token = localStorage.getItem("token");
  function logoutHandler() {
    dispatch(loginSlice.actions.logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem('persist:root');
    localStorage.clear('persist:root')
    toast.success("Logout successfully");
    navigate("/login");
  }
  if(isLoggedIn && token) {
    return (
      
        <div>
          <div class="hold-transition sidebar-mini layout-fixed">
            <div class="wrapper">
              <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-widget="pushmenu"
                      href="#"
                      role="button"
                    >
                      <i class="fas fa-bars"></i>
                    </a>
                  </li>
                </ul>
    
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <div class="media">
                    <i class="fas fa-shopping-cart" style = {{"size":"lg"}} onClick={() => navigate('/cart')}></i>
                      {/* <img
                        class="image"
                        src={"http://localhost:3000/images/" + user.profile}
                        alt="User Avatar"
                      /> */}
                      &nbsp;
                      <div class="media-body">
                        {/* <h3 class="dropdown-item-title">{user.username}</h3> */}
                        <h3 class="dropdown-item-title">{totalCount ? totalCount : 0}</h3>
                      </div>
                    </div>
                  </li>
                  &nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <button
                      class="btn btn-primary btn-block"
                      onClick={logoutHandler}
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </nav>
    
              <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <div class="sidebar">
                  <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    
                    <div class="info">
                      <span class="d-block" style={{ color: "white" }}>
                        {user?.email}
                      </span>
                    </div>
                  </div>
    
                  <nav class="mt-2">
                    <ul
                      class="nav nav-pills nav-sidebar flex-column"
                      data-widget="treeview"
                      role="menu"
                      data-accordion="false"
                    >
                      <li class="nav-item">
                        <Link to="/category" class="nav-link">
                          <i class="far fa-file-alt"></i>&nbsp;
                          <p>Categories</p>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/product" class="nav-link">
                         <i class="fas fa-store"></i>&nbsp;
                          <p>Products</p>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/brand" class="nav-link">
                          <i class="fas fa-photo-video"></i>&nbsp;
                          <p>Brands</p>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/item" class="nav-link">
                        <i class="fas fa-boxes"></i>&nbsp;
                          <p>Items</p>
                        </Link>
                      </li>
    
                      <li class="nav-item">
                        <Link to="/users" class="nav-link">
                          <i class="fas fa-users"></i>&nbsp;
                          <p>Users</p>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </aside>
            </div>
          </div>
        </div>
      );
  }
  
};

export default NavandSide;
