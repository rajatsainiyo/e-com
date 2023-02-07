import React, { useState, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "../Headbar.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Shop_Details } from "./Redux/Reducer";
// import { Shop_Details_data } from "../Redux/Reducer";

const Shop_detailsdata = () => {
  const mydata = useSelector((state) => state.Reducer.ShopArry);
  const navigate= useNavigate()

  console.log(mydata, "shopDetailarry");

  useEffect(() => {}, []);

  const shop_detail_item = (val) => {
    navigate("/shopingCart")
    const product= val.id;
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/v1/cart/`, {
        user: 39,
        product: product,
        quantity: 1,
      })
      .then((res) => {});
  };


  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {mydata?.map((val) => {
            return (
              <div className="col-lg-12">
                <div className="Product-name-section ps-4">
                  <div className="product">
                    <h2>{val.title}</h2>
                  </div>
                  <p className="font-ruppes ">${val.price}</p>
                  <p>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                    <StarHalfIcon />
                    (99 Review)
                  </p>
                  <p>{val.description}</p>
                  <div className="size-radiobox d-flex gap-3">
                    <h4 className="size-name pt-1 gap-1  ">Sizes:</h4>
                    <div class="form-check d-flex gap-3 pt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="defaultCheck1"
                      />
                      <label className="form-check-label " for="defaultCheck1">
                        {val?.size}
                      </label>
                    </div>
                   
                  </div>
                  <div className="size-radiobox d-flex gap-3">
                    <h4 className="size-name pt-1 gap-1  ">Colors:</h4>
                    <div class="form-check d-flex gap-3 pt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="defaultCheck1"
                      />
                      <label className="form-check-label " for="defaultCheck1">
                        {val.color}
                      </label>
                    </div>
                    
                  </div>
                </div>

                <div className="incre-decre d-flex gap-4 ps-4">
                  <div className="in-btn">
                    <button  className="yalloow-btn btn btn-warning">
                      <RemoveIcon />
                    </button>
                  </div>
                  <div className="input-sec ">
                    <input
                      className="input-incre-decre"
                      type="number"
                      value={1}
                    />
                  </div>
                  <div className="in-btn">
                    <button    className="yalloow-btn btn btn-warning">
                      <AddIcon />
                    </button>
                  </div>
                  <div className="in-btn d-flex">
                    <button
                      onClick={() => shop_detail_item(val)}
                      className="add-cart-btn btn btn-warning"
                    >
                      <AddShoppingCartIcon />
                      Add To Cart
                    </button>
                  </div>
                </div>
                <div className="logo-share-bar d-flex gap-4 mt-4 ps-4">
                  <h4>Share On:</h4>
                  <p>
                    <FacebookIcon />
                  </p>
                  <p>
                    <InstagramIcon />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop_detailsdata;
