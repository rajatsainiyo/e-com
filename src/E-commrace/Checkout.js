import React, { useState } from "react";
import ShopdetailHeadbar from "./ShopdetailHeadbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import axios from "axios";
// import { cart_legth } from "./Redux/Reducer";

const Checkout = () => {
  const [billingdata, setBillingdata] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    address1: "",
    address2: "",
    country: "",
    city: "",
    state: "",
    zip: null,
  });

  const mydata = useSelector((state) => state.Reducer.cartlength);
  const subtotal = () => {
    return mydata?.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  };
  const checkout = (e) => {
    const { name, value } = e.target;
    setBillingdata({ ...billingdata, [name]: value });
  };
  const onsubmit = () => {
    const{
      first_name,
        last_name,
        email,
        mobile,
        address1,
        address2,
        country,
        city,
        state,
        zip,
    } = billingdata;
    // console.log(billingdata,'checout-fill');

    axios
    .post(`${process.env.REACT_APP_BASE_URL}/api/v1/checkout/`,{
      first_name,
        last_name,
        email,
        mobile,
        address1,
        address2,
        country,
        city,
        state,
        zip,
    })
    .then(() => {
      
    });
  };



  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <ShopdetailHeadbar />

          <div className="col-lg-8">
            <div className="form-box mt-4 ps-4">
              <div className="billing-add">
                <h3>Billing Address</h3>
              </div>

              <form className="row  g-3 form-box-input">
                <div class="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    First Name
                  </label>
                  <input
                    onChange={checkout}
                    name="first_name"
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">
                    Last Name
                  </label>
                  <input
                    onChange={checkout}
                    name="last_name"
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputAddress" className="form-label">
                    E-Mail
                  </label>
                  <input
                    onChange={checkout}
                    name="email"
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Eenter Your Mail"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputAddress2" className="form-label">
                    Mobile No
                  </label>
                  <input
                    onChange={checkout}
                    name="mobile"
                    type="number"
                    className="form-control"
                    id="inputAddress2"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">
                    Address Line 1
                  </label>
                  <input
                    onChange={checkout}
                    name="address1"
                    type="text"
                    className="form-control"
                    id="inputCity"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputState" className="form-label">
                    Address Line 1
                  </label>
                  <input
                    onChange={checkout}
                    name="address2"
                    type="text"
                    className="form-control"
                    id="inputCity"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputZip" className="form-label">
                    Country
                  </label>
                  <input
                    onChange={checkout}
                    name="country"
                    type="text"
                    className="form-control"
                    id="inputZip"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputZip" className="form-label">
                    City
                  </label>
                  <input
                    onChange={checkout}
                    name="city"
                    type="text"
                    className="form-control"
                    id="inputZip"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputZip" className="form-label">
                    State
                  </label>
                  <input
                    onChange={checkout}
                    name="state"
                    type="text"
                    className="form-control"
                    id="inputZip"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputZip" className="form-label">
                    ZIP Code
                  </label>
                  <input
                    onChange={checkout}
                    name="zip"
                    type="text"
                    className="form-control"
                    id="inputZip"
                  />
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" for="gridCheck">
                      Create an account
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" for="gridCheck">
                      Ship to different address
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="head-order-total mt-4">
              <h3>ORDER TOTAL</h3>
            </div>

            <div className="box-chk">
              <div className="products-billing ">
                <div className="products-bill mt-4">
                  <h5>Products</h5>
                </div>

                {mydata?.map((val) => {
                  console.log(val.product.title, "mycart");
                  return (
                    <div className="product-name-1 d-flex mt-3">
                      <div className="product-name-box-1">
                        <div>{val.product.title}</div>
                      </div>
                      <div className="product-name-price-1">
                        <div>${val.product.price * val.quantity}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="sub-total-checkout d-flex mt-4">
                <div className="subtotal-name-box-1 pt-3 ">
                  <h5>Subtotal</h5>
                </div>
                <div className="subtotal-name-price-1 pt-3">
                  <p>{subtotal()}</p>
                </div>
              </div>
              <div className="shipping-checkout d-flex ">
                <div className="subtotal-name-box-1 pt-3 ">
                  <h5>Shipping</h5>
                </div>
                <div className="subtotal-name-price-1 pt-3">
                  <p>$10</p>
                </div>
              </div>

              <div className="check-out-total d-flex ps-3 ">
                <div className="subtotal-name-box-1 pt-3 ">
                  <h5>Total</h5>
                </div>
                <div className="subtotal-total-price-1 pt-3">
                  <p>${subtotal() + 10}</p>
                </div>
              </div>
            </div>

            <div className="payment">
              <div className="payment-heading">
                <h4>Payment</h4>
              </div>
              <div className="payment-box-paypal mt-3 ">
                <div class="form-check d-flex gap-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" for="defaultCheck1">
                    Paypal
                  </label>
                </div>
                <div class="form-check d-flex gap-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" for="defaultCheck1">
                    Direct Check
                  </label>
                </div>
                <div class="form-check d-flex gap-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" for="defaultCheck1">
                    Bank Transfer
                  </label>
                </div>
                <div className="place-order mt-3 ps-3">
                  <button
                    onClick={onsubmit}
                    className="btn btn-warning btn-place-od"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
