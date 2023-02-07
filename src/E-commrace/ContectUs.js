import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import Footer from "./Footer";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
} from "react-router-dom";

const ContectUs = () => {
  const[cotactdata,setCotactdata]=useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const contectus=(e)=>{
const{name,value}=e.target;
setCotactdata({...cotactdata,[name]:value})
console.log(cotactdata,'jjjj');
  }

  const btn_submit=()=>{

const{name,email,subject,message}=cotactdata;

// console.log(cotactdata,'jjj');
axios
.post(`${process.env.REACT_APP_BASE_URL}/api/v1/contact/`,{
  name,email,subject,message
})
.then((res) => {
 
});

  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="box-cart d-flex pt-4 mt-2">
              <div className="tex-a-teg pb-3 ">
                <a href="/home">
                  <NavLink to="/home">Home/</NavLink>
                </a>
                <a href="/contectUs">
                  <NavLink to="/contectUs">Contact/</NavLink>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2 className="contect-head">Contact us</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <div className="form-box-msg pt-4 ps-3">
              <section className="mb-4 ">
                <div className="row mt-4 ps-4 ">
                  <div clasNames="col-md-12 mb-md-0 mb-5 pt-2">
                    <form
                      id="contact-form"
                      name="contact-form"
                      action="mail.php"
                      method="POST"
                    >
                      <div className="row">
                        <div className="col-md-12 pt-2  ">
                          <div className="md-form mb-0">
                            <input
                            onChange={contectus}
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              placeholder="Your Name"
                            />
                            {/* <label for="name" className="">Your name</label> */}
                          </div>
                        </div>

                        <div className="col-md-12 pt-2">
                          <div className="md-form mb-0">
                            <input  onChange={contectus}
                              type="text"
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder="Your Email"
                            />
                            {/* <label for="email" className="">Your email</label> */}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 pt-2">
                          <div className="md-form mb-0">
                            <input
                             onChange={contectus}
                              type="text"
                              id="subject"
                              name="subject"
                              className="form-control"
                              placeholder="Subject"
                            />
                            {/* <label for="subject" className="">Subject</label> */}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 pt-2">
                          <div className="md-form">
                            <textarea
                             onChange={contectus}
                              type="text"
                              id="message"
                              name="message"
                              rows="2"
                              placeholder="Message"
                              className="form-control md-textarea"
                            ></textarea>
                            {/* <label for="message">Your message</label> */}
                          </div>
                        </div>
                      </div>
                    </form>

                    <div className=" ps-2 pt-3">
                     
                      <button  onClick={btn_submit}  className="btn btn-warning"> Send Message</button>
                    </div>
                    {/* <div className="status"></div> */}
                  </div>
                </div>
              </section>
            </div>
        
          </div>

          <div className="col-lg-5">
            <div className="map ">
              <img
                src="https://cdn.pixabay.com/photo/2015/03/08/19/52/globe-664648_960_720.jpg"
                width="370px"
                height="200px"
                alt=""
              />
            </div>

            <div className="address-map mt-4 ps-5">
              <div className="newyork ms-2 ps-3 gap-2">
                <p>
                  <LocationOnIcon fontSize="small" /> 123 Street, New York,Usa
                </p>
              </div>
              <div className="newyork ms-2 ps-3 gap-3">
                <p >
                  <MailOutlineIcon fontSize="small" />   info@example.com
                </p>
              </div>
              <div className="newyork ms-2 ps-3">
                <p>
                  <CallIcon fontSize="small" />
                   +012 345 67890
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ContectUs;
