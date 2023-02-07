import React, { useEffect, useState } from "react";
import "./Headbar.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { LineAxisOutlined } from "@mui/icons-material";
import axios from "axios";
import { ShoppingCartOutlined } from "@mui/icons-material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Shop_Details_data } from "./Redux/Reducer"
import { product_data } from "./Redux/Reducer";


const Featured = () => {
  // const [datanw, setDatanw] = useState([]);
  
  // const navigate=useNavigate()
const mydata = useSelector((state)=>state.Reducer.productApi)
console.log(mydata,'productapi');


  let mytoken = localStorage.getItem("token")
    const navigate= useNavigate()
    const dispatch = useDispatch()

  const getusere = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/v1/product/`)
      .then((res) => {
        // console.log(res, "res");
        const newdata = res?.data;
        dispatch(product_data(newdata.results))
        // setDatanw(newdata);
      });
  };


  // let newarry = datanw.results;
  // console.log(newarry,'newarry');

  useEffect(() => {
    getusere();
  }, []);


  const Add_cart = (val,id)=>{
    
    const product= val.id;
   
    if(mytoken===null){
      navigate("/signin")
    }else{
      navigate("/shopingCart")
    }
    
const userdata = localStorage.getItem("user")
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/cart/`,{
      user:39,
      product:product,
      quantity:1

    })
    .then((res)=>{

      // getusere()
    })
  }

  const Shop_details_item =(val)=>{
    navigate("/shopDetail")
    dispatch(Shop_Details_data(val))
    
  }

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
          {mydata?.map((val, id) => {
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
  );
};

export default Featured;
