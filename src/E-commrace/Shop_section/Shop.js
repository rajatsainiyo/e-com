import React, { useEffect, useState } from "react";
import axios from "axios";
import Shop_product from "./Shop_product";
import Sorting_section from "../Sorting_section";
// import HeaderCategoris from './HeaderCategoris'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
} from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import WidgetsIcon from "@mui/icons-material/Widgets";
// import StarIcon from "@mui/icons-material/Star";
// import StarHalfIcon from "@mui/icons-material/StarHalf";
import Footer from "../Footer";
import ShopdetailHeadbar from "../ShopdetailHeadbar";
import "../Headbar.css";
import Filterbyprice from "./Filterbyprice";
import Filterbycolor from "./Filterbycolor";
// import { useSelector } from "react-redux";

import { useSelector } from "react-redux";
import Featured from "../Featured";


// import "./Headbar.css";

const Shop = () => {
  
  const mydata = useSelector((state)=>state.Reducer.dataapi)
  const Allproduct = useSelector((state)=>state.Reducer.productApi)
  
  return (
    <>
      <div className="container-fluid">

        <div className="row">


        <ShopdetailHeadbar />
        </div>

        <div className="row">
          <div className="col-lg-3">
            <Filterbyprice />
            <Filterbycolor/>
          

          </div>

          <div className="col-lg-9">
          <Sorting_section/>

         {mydata.length>0?( <Shop_product />):( <Featured/>)}
            
           
           
          </div>
        </div>
        <div className="row p-3">
          <div className="col-lg-12">
            <div className="pagination ">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shop;
