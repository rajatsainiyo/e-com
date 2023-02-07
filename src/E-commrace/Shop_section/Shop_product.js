import React, { useEffect, useState } from "react";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import "../Headbar.css";
import { useSelector } from "react-redux";

const Shop_product = () => {
  
  const mydata = useSelector((state)=>state.Reducer.dataapi)
console.log(mydata,'mydata');
const[hidedata,setHidedata]=useState([])
  
const getusere = () => {
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/v1/product/`)
    .then((res) => {
      // console.log(res, "res");
      const newdata = res?.data;
      setHidedata(newdata.results)
    });
};
// console.log(hidedata,'hhh');
useEffect(() => {
  getusere();
}, []);


  return (
    <>
      <div className="container-fluid">
        
        <div className="row">
          {mydata?.map((val) => {
            return (
              <div className="col-lg-12 col-shop">

<div className="cart-box-item    ">
                <div className="item-box-Featured-1   ">
                  <div className="img-featured-girl ">
                    <img src={val.image} width={360} height="280px" alt="" />
                  </div>

                  <div className="img-featured-2 ps-4 mt-4">
                    <div className="text-feat-product">
                      <h5>{val.title}</h5>
                      <div className="text-product ms-3 ps-4 d-flex">
                        <h5>${val.price}</h5>
                        <h5 className="text-decoration-line-through ps-2">
                          $ {val.old_price}
                        </h5>
                      </div>
                      <h6 className="ms-4 ps-4">
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop_product;
