/*
    The 'store.js' component is responsible for creating the store 
    and providing the state to the entire application. 
    It also combines all the reducers used in the application and creates the store. 
    The store is then used in the application to get the state and update the state.

    This file is responsible for setting up the store using the 'configureStore' method 
    from the '@reduxjs/toolkit' package. 
    It also imports the reducer and applies any necessary middleware.
*/
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Components/reducer";

const store = configureStore({
  reducer: {
    users: userReducer
  }
});

export default store;
