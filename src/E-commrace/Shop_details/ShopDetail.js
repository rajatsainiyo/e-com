import React, { useEffect, useState } from "react";
import ShopdetailHeadbar from "../ShopdetailHeadbar";
import "../Headbar.css";
import Carousel from "react-bootstrap/Carousel";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ProductDescription from "../ProductDescription";
import Information from "../Information";
import Reviews from "../Reviews";
import Youmaylike from "../Youmaylike";
import Footer from "../Footer";
import axios from "axios";
import Shop_detailsdata from "./Shop_detailsdata";
import { Shop_Details_data } from "../Redux/Reducer";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
} from "react-router-dom";
import { Tabs } from "antd";
import { useSelector } from "react-redux";

const ShopDetail = () => {
 
  
const mydata = useSelector((state)=>state.Reducer.ShopArry)

  console.log(mydata,'shopDetailarry');

  

  useEffect(() => {
   
  }, []);

  return (
    <>
      <div className="container-fluid">
        <ShopdetailHeadbar />
        <div className="row me-0">
          <div className="col-lg-5">



            <Carousel>
                    {mydata?.map((val)=>{return(
                <Carousel.Item>
                  <div className="img-box d-flex">


                      <img src={val.image} alt="" />
                  </div>

                  
                </Carousel.Item>

               
)})}
</Carousel>



           
          </div>

          <div className="col-7">
            <Shop_detailsdata/>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Tabs>
              <Tabs.TabPane tab="Description" key="tab1 ">
                <ProductDescription />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Information" key="tab2">
                <div className="content">
                  <Information />
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Reviews" key="tab3 ">
                <div className="content">
                  <Reviews />
                </div>
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>
        <Youmaylike />
      </div>
      <Footer />
    </>
  );
};

export default ShopDetail;
