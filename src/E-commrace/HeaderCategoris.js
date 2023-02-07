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

const HeaderCategoris = () => {
  const [datanw, setDatanw] = useState([]);
  
 
  const mydata = useSelector((state) => state.Reducer.cartlength);
  // console.log(mydata,'cartlength');

  const getusere = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/v1/product/`)
      .then((res) => {
        const newdata = res?.data;
        setDatanw(newdata.results);
      });
  };

  useEffect(() => {
    getusere();
  }, []);

  

  return (
    <>
      <div className="container-fluid">

<div className="row"><div className="col"><HeadbarSearch/></div></div>

        <div className="row categorius-row mb-0px-15px">
          <div className="col-sm ">
            <div className="categeros">
              <div className="dropdown ">
                <button
                  className="btn btn-Light dropdown-toggle  drop-Categories"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <MenuIcon /> Categories
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item sign" href="#">
                      Dresses
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item sign" href="#">
                      Shirts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item sign" href="#">
                      Jeans
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item sign" href="#">
                      Swimwear
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item sign" href="#">
                      Sleepwear
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item sign" href="#">
                      Sportswear
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="hom-shop d-flex">
              <a className="dropdown-item shop-font" href="./home">
                {" "}
                <NavLink className="footer_item_css"  to="./home">Home</NavLink>
              </a>
              <a className="dropdown-item shop-font" href="./shop">
                {" "}
                <NavLink className="footer_item_css"  to="./shop">Shop</NavLink>
              </a>
              <a className="dropdown-item shop-font" href="./shopDetail">
                {" "}
                <NavLink className="footer_item_css"  to="./shopDetail">ShopDetail</NavLink>
              </a>
              <div   className="dropdown footer_item_css ">
                <div className="drop-box-page">
                  <button
                    className="btn btn-Light shop-font footer_item_css  "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                    <ArrowDropDownIcon  />
                    {/* <CaretDownOutlined /> */}
                  </button>

                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <div className="box-drop">
                      <li >
                        <a className="dropdown-item " href="/shopingCart">
                          {" "}
                          <NavLink className="footer_item_css"   to="/shopingCart">Shoping Cart</NavLink>{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item " href="/checkout">
                          <NavLink to="/checkout">checkout</NavLink>
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <a className="dropdown-item shop-font" href="/contectUs">
                <NavLink className="footer_item_css" to="/contectUs">Contact</NavLink>
              </a>
            </div>
          </div>
          <div className="col-sm">
            <div className="cart-item d-flex">
              <div className="box-cart-css">
                <FavoriteIcon />
              </div>
              <div  className="cart-css">

               
                <NavLink className="footer_item_css" to="/shopingCart">
                  {" "}
                <ShoppingCartOutlined />({mydata.length})
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCategoris;
