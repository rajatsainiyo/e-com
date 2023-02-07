import React, { useState } from "react";
import "./Headbar.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import CopyrightIcon from "@mui/icons-material/Copyright";
import axios from "axios";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    NavLink,
    useNavigate,
  } from "react-router-dom";

const Footer = () => {
    const navigate= useNavigate()
  const [footersignup, setFootersignup] = useState({
    email: "",
  });
  const footer_signup = (e) => {
    const { name, value } = e.target;
    setFootersignup({ ...footersignup, [name]: value });
  };
  const fotter_submit = () => {
    const { email } = footersignup;

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/v1/newsletter/`, {
        email,
      })
      .then(() => {});
  };
  return (
    <>
      <div className="container-fluid color-cont">
        <div className="container mt-5 cont-about ">
          <div className="row">
            <div className="col-lg-3 col-sm-3">
              <div className="small-cont">
                <div className="color-part">
                  <h3>GET IN TOUCH</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum quis nesciunt, animi, eius aspernatur cum possimus
                    minima.
                  </p>
                  <h6>
                    <LocationOnIcon className="color-icon" />
                    123 Street,New york,USA
                  </h6>
                  <h6>
                    <EmailIcon className="color-icon" />
                    info@example.com
                  </h6>
                  <h6>
                    <WifiCalling3Icon className="color-icon" />
                    +01234567890
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-3">
              <div className="small-cont">
                <div className="color-part">
                  <h3>QUICK SHOP</h3>

                  <div className="item-cont">
                    <h6>
                      <ArrowForwardIosIcon />
                      <NavLink className="footer_item_css"  to="/home">Home</NavLink> 
                    </h6>
                    <h6>
                      <ArrowForwardIosIcon />
                      <NavLink className="footer_item_css"  to="/shop">Our Shop</NavLink> 
                    </h6>
                    <h6>
                      <ArrowForwardIosIcon />    
                       <NavLink className="footer_item_css"  to="/shopDetail">Shop Detail</NavLink>  

                    </h6>
                    <h6>
                      <ArrowForwardIosIcon />
                      <NavLink className="footer_item_css"  to="/shopingCart"> Shoping Cart</NavLink>  
                       
                    </h6>
                    <h6>
                      <ArrowForwardIosIcon />
                      <NavLink className="footer_item_css"  to="/checkout">  Checkout</NavLink>  
                       
                    </h6>
                    <h6>
                      <ArrowForwardIosIcon /> 
                      <NavLink className="footer_item_css"  to="/contectUs">  Contect Us</NavLink>  

                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-3">
              <div className="small-cont">
                <div className="color-part">
                  <h3>MY ACCOUNT</h3>

                  <div className="item-cont">
                    <h6 >
                      <ArrowForwardIosIcon />
                      
                     <NavLink className="footer_item_css"  to="/home">Home</NavLink> 
                    </h6>
                    <h6>
                      <ArrowForwardIosIcon />
                     <NavLink className="footer_item_css"  to="/shop">Our Shop</NavLink> 

                      
                    </h6>
                    <h6>
                      <ArrowForwardIosIcon />
                      <NavLink className="footer_item_css"  to="/shopDetail">Shop Detail</NavLink>  
                    </h6>
                    <h6>
                      <ArrowForwardIosIcon />
                      <NavLink className="footer_item_css"  to="/shopingCart"> Shoping Cart</NavLink>  

                      
                    </h6>
                    <h6>
                      <ArrowForwardIosIcon /> 
                      <NavLink className="footer_item_css"  to="/checkout">  Checkout</NavLink>  
                      
                     
                    </h6>
                    <h6>
                      <ArrowForwardIosIcon /> 
                      <NavLink className="footer_item_css"  to="/contectUs">  Contect Us</NavLink>  

                      
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-3">
              <div className="small-cont">
                <div className="color-part">
                  <h3>NEWSLETTER</h3>

                  <div className="newslatr">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iste, ullam?
                    </p>
                    <div className="signup d-flex">
                      <div className="input-fd ">
                        <input
                          onChange={footer_signup}
                          name="email"
                          className="input-css"
                          type="text"
                          placeholder="Your Email Address"
                        />
                      </div>
                      <div className="btn-fd">
                        <button
                          onClick={fotter_submit}
                          className="btn btn-warning btn-css  "
                        >
                          Signup
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="folow-us">
                    <h3>FOLLOW US</h3>

                    <div className="logo-follow d-flex">
                      <img
                        src="https://cdn.pixabay.com/photo/2022/04/01/19/41/logo-7105561_960_720.png"
                        width="50px"
                        height="40px"
                        alt=""
                      />
                      <img
                        src="https://cdn.pixabay.com/photo/2022/04/01/19/41/logo-7105561_960_720.png"
                        width="50px"
                        height="40px"
                        alt=""
                      />
                      <img
                        src="https://cdn.pixabay.com/photo/2022/04/01/19/41/logo-7105561_960_720.png"
                        width="50px"
                        height="40px"
                        alt=""
                      />
                      <img
                        src="https://cdn.pixabay.com/photo/2022/04/01/19/41/logo-7105561_960_720.png"
                        width="50px"
                        height="40px"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-0 ">
            <div className="col">
              <div className="underline">
                <p className="color-part">
                  <CopyrightIcon />
                  Domain.ALL Rights Reserved.Designed by ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
