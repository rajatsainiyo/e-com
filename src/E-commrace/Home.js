import React from "react";
import "./Headbar.css";
import Quantity from "./Quantity";
import Categorisitem from "./Categorisitem";
import Featured from "./Featured";
import Specialoff from "./Specialoff";
import Recentproduct from "./Recentproduct";
import Logoteb from "./Logoteb";
import Footer from "./Footer";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
// import HeaderCategoris from "../E-commrace/HeaderCategoris";

const Home = () => {
  // let mytoken = localStorage.getItem("token")
  // const navigate= useNavigate();
  return (
    <>
    {/* <HeaderCategoris/> */}
      <div className="container-fluid">

        {/* <div className="row"><div className="col-lg"><HeaderCategoris/></div></div> */}
        <div className="row">
          <div className="col-lg-8">
            <div className="img-sec">
              <Carousel>
                <Carousel.Item>
                  <div className="img-box-1"></div>

                  <Carousel.Caption>
                    <h1>Women Fashion</h1>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Doloremque dolorum numquam dignissimos aspernatur saepe ut
                      quia cum, accusantium adipisci at sapiente tenetur.
                    </p>
                    <button className="btn bg-transparent btn-shop">
                      Shop Now
                    </button>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="img-box-2"></div>

                  <Carousel.Caption>
                    <h1>Men Fashion</h1>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Doloremque dolorum numquam dignissimos aspernatur saepe ut
                      quia cum, accusantium adipisci at sapiente tenetur.
                    </p>
                    <button className="btn bg-transparent btn-shop">
                      Shop Now
                    </button>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="img-box-3"></div>

                  <Carousel.Caption>
                    <h1>Kids Fashion</h1>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Doloremque dolorum numquam dignissimos aspernatur saepe ut
                      quia cum, accusantium adipisci at sapiente tenetur.
                    </p>
                    <button className="btn bg-transparent btn-shop">
                      Shop Now
                    </button>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="img-sec-2 mt-4 pt-1">
               <div className=" img-1">
               <div className="text-box">
                <div className="save-20">
                  <h5 className="text-box-1">Save 20%</h5>
                </div>
                <h3 className="text-box-2">Special Offer</h3>
                <div className="btn-shop-warn">
                  <button className="btn btn-warning ">Shop Now</button>
                </div>
              </div>
             </div>
             <div className="img-2">
              <div className="text-box">
                <div className="save-20">
                  <h5 className="text-box-1">Save 20%</h5>
                </div>
                <h3 className="text-box-2">Special Offer</h3>
                <div className="btn-shop-warn">
                  <button className="btn btn-warning ">Shop Now</button>
                </div>
                </div>
              </div>
              </div>
          </div>


        </div>
      </div>

      <Quantity />
     <Categorisitem />
            <Featured />
            <Specialoff />
            <Recentproduct />
            <Logoteb />
            <Footer /> 
    </>
  );
};

export default Home;
