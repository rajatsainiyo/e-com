import React, { useEffect } from "react";
import "../Headbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Searchbararry_Details_data } from "../Redux/Reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Search } from "@mui/icons-material";
import axios from "axios";

// import { Modal } from "react-bootstrap";
// import { Button } from "react-bootstrap";

const HeadbarSearch = () => {
 
  const [search, setSearch] = useState([]);
  const [data, setData] = useState([]);
  const [serachtitle, setSearchtitle] = useState("");
  const filtersearch = useSelector((state) => state.Reducer.Searchbararry);
  console.log(filtersearch, "mapping");
  const dispatch = useDispatch();




  const user = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/v1/product/`)
      .then((res) => {
        const mydata = res?.data;
        setSearch(mydata.results);
        setData(mydata.results);
      });
  };



  useEffect(() => {
    user();
  }, []);




  const serachitem = (e) => {
    const val = e.target.value;
    if (val == "") {
      setData(search);
      dispatch(Searchbararry_Details_data(search));
    }
    
    else {
      const filterdata = search.filter((item) => {
        return item.title.toLowerCase().includes(val.toLowerCase());
      });
      setData(filterdata);
      dispatch(Searchbararry_Details_data(filterdata));
    }

    setSearchtitle(val);
  };



  return (
    <div>
      <div className="fluid-contianer">
        <div className="row">
          <div className="col-sm">
            <div className="img-lo pt-3 ps-4">
              <img
                src="https://cdn.pixabay.com/photo/2015/01/05/11/02/wordpress-589121_960_720.jpg"
                width="300px"
                height="70px"
                alt=""
              />
            </div>
          </div>

          <div className="col-sm ">
            <div className="signup d-flex pt-4 ps-4 mt-2 ">
              <div className="input-search-product ">
                <input
                  onChange={serachitem}
                  value={serachtitle}
                  className="input-search"
                  type="text"
                  placeholder="Search for Products"
                />
              </div>
              <div className="btn-search-product">
                <button className="search-icon ">
                  {" "}
                  <SearchIcon className="serach-icon-icon" />
                </button>
              </div>
            </div>

            <div className="dropdown-serachbar">
              {filtersearch?.map((val) => (
                <div className="dropdown-row">{val.title}</div>
              ))}
            </div>
          </div>

          <div className="col-sm">
            <div className="customer-service">
              <div className="customer mt-3px">
                <p className="customer-font mb-0">Customer Service</p>
                <h5>+01234567890</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadbarSearch;
