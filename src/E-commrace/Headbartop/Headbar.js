import React, { useEffect } from "react";
import "../Headbar.css";
import SearchIcon from "@mui/icons-material/Search";
import HeadbarSearch from "./HeadbarSearch";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
  useNavigate,
} from "react-router-dom";

const Headbar = () => {
  let mytoken = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {}, []);
  const logout = () => {
    const exit = localStorage.removeItem("token");
    const data = localStorage.getItem("token");
    console.log(data,'logout');
    if (data ==null) {
      navigate("/signin");
    }
  };

  return (
    <>
      <div className="container-fluid">
        {/* <div className="container"> */}
        <div className="row">
          <div className="col-sm row-head">
            <div className="d-inline-flex  ">
              <h6 className="col sm head-top">
                <NavLink
                  className="text-decoration-none text-secondary "
                  to="/about"
                >
                  About
                </NavLink>
              </h6>
              <h6 className="col sm  head-top">
                <NavLink
                  className="text-decoration-none text-secondary"
                  to="contectUs"
                >
                  Contact
                </NavLink>
              </h6>
              <h6 className="col sm head-top">Help</h6>
              <h6 className="col sm head-top">FAQs</h6>
            </div>
          </div>
          <div className="col-sm row-head ">
            <div className="col-sm d-inline-flex my-account-section ">
              <div className="btn-group">
                <div className="dropdown   ">
                  <button
                    className="btn btn-Light dropdown-toggle drop-btn "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    My Account
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {mytoken ? (
                      <li>
                        <button
                          className="dropdown-item  sign"
                          onClick={logout}
                        >
                          Logout
                        </button>
                      </li>
                    ) : (
                      <li>
                        <a className="dropdown-item  sign" href="/signin">
                          <NavLink to="/signin">Login</NavLink>{" "}
                        </a>
                      </li>
                    )}

                    <li>
                      <a className="dropdown-item  sign" href="/signup">
                        <NavLink to="/signup"></NavLink> Sign up
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="btn-group-mx-2">
                {mytoken ? (
                  <div className="dropdown ">
                    <button
                      class="btn btn-Light dropdown-toggle  drop-btn"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      USD
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item sign" href="#">
                          EUR
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item sign" href="#">
                          GBP
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item sign" href="#">
                          CAD
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className="btn-group-mx-3">
                {mytoken ? (
                  <div className="dropdown ">
                    <button
                      className="btn btn-Light dropdown-toggle  drop-btn"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      EN
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item sign" href="#">
                          FR
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item sign" href="#">
                          AR
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item sign" href="#">
                          RU
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </>
  );
};

export default Headbar;
