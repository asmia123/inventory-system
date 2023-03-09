import { useContext, useEffect } from "react";
import { loginSlice } from "../store/login-slice";
import { useSelector, useDispatch } from 'react-redux';

import NavandSide from "./nav&side";

const MainNavigation = (props) => {
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   const token = localStorage.getItem("token");
  //   if(token){
  //     dispatch(loginSlice.actions.login(responseJson.token));
  //   }
  //   else{
  //     dispatch(loginSlice.actions.logout());
  //   }
  // })

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <div>{isLoggedIn == true && <NavandSide />}</div>
   
  );
};

export default MainNavigation;
