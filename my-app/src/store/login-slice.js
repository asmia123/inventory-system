import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLoggedIn: false,
        token: null,
        user: {}
    },
    reducers: {
        login(state,action){
            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
            console.log(action.payload)
            // console.log(state.isLoggedIn,state.token,state.user);
            
        },
        logout(state){
            state.isLoggedIn = false;
            state.token = null;
            state.user = {}
            console.log(state.isLoggedIn,state.token);
        },
    },
});
export const loginActions = loginSlice.actions;

export default loginSlice;