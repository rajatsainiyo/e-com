import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
} from "react-router-dom";

const ShopdetailHeadbar = () => {
  return (
    <>
      <div className="fluid-conatiner">
        <div className="row p-2">
          <div className="col-12">
            <div className="box-cart d-flex pt-4 ms-3 gap-3  ">
              <div className="tex-a-teg  pb-3 ">
                <a >
                  <NavLink className="ShopdetailHeadbar_css" to="/home">Home/</NavLink>
                </a>
                <a >
                  <NavLink className="ShopdetailHeadbar_css" to="/shop">Shop/</NavLink>
                </a>
                <a >
                  <NavLink className="ShopdetailHeadbar_css" to="/shopDetail">Shop Details/</NavLink>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopdetailHeadbar;
