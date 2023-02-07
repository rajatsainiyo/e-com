import React from "react";
import { CheckOutlined } from "@mui/icons-material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import "./Headbar.css";

const Quantity = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex ">
          <div className="box-qnt d-flex gap-4 ">
            <div className="col-lg-2 qnt-p-1  ">
              <div className="qnt-text d-flex">
                <div className="logo-qnt-1">
                  <p>
                    {" "}
                    <CheckOutlined fontSize="large" />
                  </p>
                </div>

                <div className="14-day-ret ps-3">
                  <h3> Quantity Product</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-2 qnt-p-1 ">
              <div className="qnt-text d-flex">

              <div className="logo-qnt-1">
                  <p>
                    {" "}
                    <LocalShippingIcon  fontSize="large" /> 
                  </p>
                </div>

                <div className="14-day-ret ps-3">
                  <h3> Free Shipping</h3>
                </div>


              </div>
            </div>
            <div className="col-lg-2 qnt-p-1 ">
              <div className="qnt-text d-flex">
                <div className="logo-qnt-1">
                  <p>
                    {" "}
                    <SwapHorizIcon  fontSize="large" />
                  </p>
                </div>

                <div className="14-day-ret ps-3">
                  <h3> 14-Day Return</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-2 qnt-p-1 ">
              <div className="qnt-text d-flex">
                <div className="logo-qnt-1">
                  <p>
                    {" "}
                    <WifiCalling3Icon  fontSize="large" />
                  </p>
                </div>
                <div className="14-day-ret ps-3">
                  <h3> 24/7 Support</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quantity;
