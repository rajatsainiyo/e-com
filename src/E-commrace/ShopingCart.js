import React, { useEffect, useState } from "react";
import axios from "axios";
import ShopdetailHeadbar from "./ShopdetailHeadbar";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Headbar.css";
import CloseIcon from "@mui/icons-material/Close";
import Footer from "./Footer";
import {
  AccessTimeOutlined,
  SettingsSystemDaydreamTwoTone,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {  useSelector } from 'react-redux';
import { cart_legth } from './Redux/Reducer';


const ShopingCart = () => {
  const [datanw, setDatanw] = useState([]);
  
const dispatch = useDispatch();



  const getusere = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/cart/`).then((res) => {
      const newdata = res?.data;
      setDatanw(newdata);
      dispatch(cart_legth(newdata.results));
    });
  };

  const input_cart_qnt = (e) => {
    setDatanw(e.target.value);
  };

  const incre = (val) => {
    let dd = val.quantity + 1;
    let id = val.id;
    let user = val.user;
    let product = val.product.id;

    console.log(id, "ss");
    setDatanw(dd);
    console.log(dd, "kk");

    axios
      .patch(`${process.env.REACT_APP_BASE_URL}/api/v1/cart/${id}/`, {
        user: user,
        quantity: dd,
        product: product,
      })

      .then((res) => {
        getusere();
      },);
  };

  const decre = (val) => {
    if (val.quantity > 0) {
      let qnt = val.quantity - 1;
      let id = val.id;
      let user = val.user;
      let product = val.product.id;
      setDatanw(qnt);
      axios
        .patch(`${process.env.REACT_APP_BASE_URL}/api/v1/cart/${id}/`, {
          quantity: qnt,
          user: user,
          product: product,
        })
        .then((res) => {
          getusere();
        });
    }
  };

  const remove_item = (val, index) => {
    let id_item = val.id;
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/api/v1/cart/${id_item}/`)
      .then(() => {
        getusere();
      });
  };

  let newarry = datanw.results;

  const subtotal = () => {
    return newarry?.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    getusere();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <ShopdetailHeadbar />

        <div className="row">
          <div className="col-lg-8">
            <div className="navbar-cart-item">
              <table className="table table-striped">
                <thead className="thead-dark-color">
                  <tr>
                    <th className="th-font" scope="col">
                      Products
                    </th>
                    <th className="th-font" scope="col">
                      Price
                    </th>
                    <th className="th-font" scope="col">
                      Quantity
                    </th>
                    <th className="th-font" scope="col">
                      Total
                    </th>
                    <th className="th-font" scope="col">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {newarry?.map((val, index) => {
                    return (
                      <tr>
                        <td>{val.product.title}</td>
                        <td>${val.product.price}</td>
                        <td className="gap-2">
                          <div className="cart-in-dec-btn">
                            <button
                              onClick={() => decre(val)}
                              className=" btn btn-warning btn-cart-inner  "
                            >
                              <RemoveIcon
                                fontSize="small"
                                className="remove-icon-wd"
                              />
                            </button>
                            <input
                              onChange={(e) => input_cart_qnt(e)}
                              className="input-cart-item "
                              type="text"
                              value={val.quantity}
                            />
                            <button
                              onClick={() => incre(val)}
                              className=" btn btn-warning btn-cart-inner "
                            >
                              <AddIcon className="remove-icon-wd" />
                            </button>
                          </div>
                        </td>
                        <td>${val.product.price * val.quantity}</td>
                        <td>
                          <button
                            onClick={() => remove_item(val, index)}
                            className="btn btn-danger btn-dnager-btn  "
                          >
                            <CloseIcon className="remove-btn-dnager" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="navbar-cart-item ">
              <div className="coupon-code d-flex">
                <div className="couppon-input">
                  <input
                    className="Coupon-code-apply"
                    placeholder="Coupon Code"
                    type="text"
                  />
                </div>

                <div className="coupon-btn">
                  <button className="coupon-btn btn btn-warning">
                    Apply Coupon
                  </button>
                </div>
              </div>
            </div>
            <p className="cart-summary">CART SUMMARY</p>
            <div className="subtotal ">
              <div className="title-sub d-flex  ps-3">
                <div className="sub-title  ">
                  <h4>Subtotal</h4>
                </div>

                <div className="sub-rs">
                  <h4>{subtotal()}</h4>
                </div>
              </div>
              <div className="shipping-sub d-flex ps-3">
                <div className="Shipping-title">
                  <h4>Shipping</h4>
                </div>
                <div className="shipping-rs">
                  <h4>$10</h4>
                </div>
              </div>

              <div className="total-sum d-flex ps-4 pt-3 ">
                <div className="Total-title">
                  <h4>Total</h4>
                </div>
                <div className="Total-rs">
                  <h4>${subtotal()+10}</h4>
                </div>
              </div>
              <div className="proceed-to-check mt-3 ps-4">
                <div className="proceed-btn">
                  <button className=" proceed-btn-btn btn btn-warning">
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopingCart;
