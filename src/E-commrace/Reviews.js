import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import "./Headbar.css";
import { useSelector } from "react-redux";

const Reviews = () => {
  const mydata = useSelector((state)=>state.Reducer.ShopArry)
  return (
    <>
      <div className="container">
        <div className="row">
          {mydata?.map((val)=>{return(

            
         
          <div className="col-6">
            <div className="heading-user ">
              <h4>1 review for " {val.title} "</h4>
            </div>

            <div className="user d-flex gap-4 pt-4">
              <img
                src="https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617_960_720.jpg"
                width="50px"
                height="50px"
                alt=""
              />

              <div className="user-comment">
                <div className="username-box -d-flex">
                  <div className="font-username d-flex ">
                    <div className="name">
                      <h4>Jone Doe</h4>
                    </div>
                    <div className="date pt-2">
                      <p>-01 jan 2022</p>
                    </div>
                  </div>
                </div>

                <p>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                  <StarOutlineIcon />
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  modi saepe veritatis?
                </p>
              </div>
            </div>
          </div>
           )})}
          <div className="col-6">
            <div className="content-head">
              <h4>Levae a Review</h4>
            </div>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <p>
              Your Rating*:{" "}
              <h1>
                {" "}
                <StarOutlineIcon className="icon-star-empty" />{" "}
                <StarOutlineIcon className="icon-star-empty" />{" "}
                <StarOutlineIcon className="icon-star-empty" />{" "}
                <StarOutlineIcon className="icon-star-empty" />{" "}
                <StarOutlineIcon className="icon-star-empty" />
              </h1>
            </p>
            <div className="commemnt-box gap-2 bg-bla">
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Your review*</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <div className="form-group">
                <label for="exampleFormControlInput1">Your name*</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="commnet-box-btn mt-4">
              <button className=" btn btn-warning Commnent-btn    ">Leave Your Review</button>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
