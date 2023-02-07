import { createSlice } from "@reduxjs/toolkit";
// import { useState } from "react";

const inititalstate = {
  productApi:[],
  dataapi: [],
  cartlength: [],
  ShopArry:[],
  Searchbararry:[],
};

const Reducre = createSlice({
  name: "cart",
  initialState: inititalstate,
  reducers: {
    product_data: (state, action) => {
      state.productApi = [...action.payload];
    },
    add_check: (state, action) => {
      state.dataapi = [...action.payload];
    },

    cart_legth: (state, action) => {
      state.cartlength = [...action.payload];
    },
    Shop_Details_data: (state, action) => {
     
      state.ShopArry = [action.payload];
    },
    Searchbararry_Details_data: (state, action) => {
     
      state.Searchbararry = [...action.payload];
    },
  },
});
export const { add_check, cart_legth,Shop_Details_data ,Searchbararry_Details_data,product_data} = Reducre.actions;
export default Reducre.reducer;
