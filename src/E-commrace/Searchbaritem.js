import React from 'react'
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from "react";
import { ShoppingCartOutlined, Token } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Headbar.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { cart_legth } from "./Redux/Reducer";
import HeadbarSearch from "./Headbartop/HeadbarSearch";

const Searchbaritem=()=> {
  const filtersearch = useSelector((state) => state.Reducer.Searchbararry);

  return (
    <>
    <div className="container-fluid ">
        <div className="row p-3">
          <div className="col-lg-12">
            <div className="h1-teg ">
              <h1 className="doted-cat">FEATURED PRODUCTS </h1>
            </div>
          </div>
        </div>
        <div className="row  p-3  ">
          {filtersearch?.map((val, id) => {
            return (
              <div className="col-md-4 col-lg-4 bg-white w-cover  ">
                <div key={id}>
                  {
                    <div className="item-box-Featured   ">

                      <div  className="hover-image">
                      <div className="img-featured-girl">

                      <div  className="image-hover-hover">

                        <img
                        onClick={()=>Shop_details_item(val)}
                          src={val.image}
                          width={270}
                          height="280px"
                          alt=""
                          />
                          </div>
                        <div className="btn-section">
                       <button onClick={()=>Add_cart(val,id)} className="mybuttonoverlap btn btn-warning"><ShoppingCartOutlined/></button>
                        <button className="mybuttonoverlap btn btn-warning"><FavoriteIcon/></button>
                        <button className="mybuttonoverlap btn btn-warning"><AutorenewIcon/></button>
                        <button className="mybuttonoverlap btn btn-warning"><SearchIcon/></button>

                        </div>
                      </div>
                      </div>

                      <div className="img-featured-2 ">
                        <div className="text-feat-product">
                          <div className="title-name-product ps-4">
                            <h5>{val.title}</h5>
                          </div>
                          <div className="text-product  d-flex">
                            <div className="price-teg ps-4 ms-1">
                              <h5>{val.price} </h5>
                            </div>
                            <p className="text-decoration-line-through ps-2">
                              {val.old_price}
                            </p>
                          </div>
                          <h6 className=" ">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                            (99)
                          </h6>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>
            );
          })}
        </div>

        {/* </div> */}
      </div>
    </>
  )
}

export default Searchbaritem