import React, { useState, useEffect } from "react";
import "./Headbar.css";
import WidgetsIcon from "@mui/icons-material/Widgets";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add_check } from "./Redux/Reducer";

const Sorting_section = () => {
  const [datanw, setDatanw] = useState([]);
  const dispatch = useDispatch();

  const getusere = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/v1/product/`)
      .then((res) => {
        // console.log(res, "res");
        const newdata = res?.data;
        setDatanw(newdata.results);
      });
  };

  useEffect(() => {
    getusere();
  }, []);

  const Latest = () => {
    const sortdata = datanw.sort((a, b) => a.created.localeCompare(b.created));
    dispatch(add_check(sortdata));
    // console.log(sortdata,'data');
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg">
            <div className="headingsort d-flex gap-3">
              <div className="logo ps-3 ">
                <WidgetsIcon />
              </div>
              <div className="logo ps-3 ">
                <MenuIcon />
              </div>

              {/* <div className="sorting "> */}

              <div className="sort-btn  ">
                <div className="dropdown   ">
                  <button
                    className="btn btn-Light dropdown-toggle drop-btn "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sorting
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        onClick={Latest}
                        className="dropdown-item  sign"
                        href="#"
                      >
                        Latest
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item  sign" href="#">
                        Popularity
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item  sign" href="#">
                        Best rtaing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="Showing-btn">
                <div className="dropdown   ">
                  <button
                    className="btn btn-Light dropdown-toggle drop-btn "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Showing
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item  sign" href="#">
                        10
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item  sign" href="#">
                        20
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item  sign" href="#">
                        30
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* </div> */}
            </div>

            {/* <Shop_product /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorting_section;
