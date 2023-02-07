import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
} from "react-router-dom";
import axios from "axios";


const Signup = () => {
    const[responcedata,setResponcedata]=useState([])
  const [usersignup, setUsersignup] = useState({
    email: "",
    password: "",
    password2: "",
    first_name: "",
    last_name: "",
  });
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const userregister = (e) => {
    const { name, value } = e.target;
    setUsersignup({ ...usersignup, [name]: value });
  };

  const Register = (e) => {
    e.preventDefault();
    let { email, password, password2, first_name, last_name } = usersignup;


    axios .post(`${process.env.REACT_APP_BASE_URL}/api/v1/signup/`,{
        email:usersignup.email ,
        password:usersignup.password ,
        password2: usersignup.password2,
        first_name:usersignup.first_name,
        last_name: usersignup.last_name,


    })
    .then((res)=>{ 
     
   
    })

    // console.log(usersignup, "hhj");
    if (
      email === "" ||
      password === "" ||
      password2 === "" ||
      first_name === "" ||
      last_name === ""
    ) {
      setError(true);
    } else {
      setError(false);
      setSubmitted(true);
    }

   
  };


// console.log(responcedata,'responcedata');


  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h6 className="ps-4 ms-3" style={{ color: "green" }}>
          User successfully registered!!
        </h6>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h6 className="ps-4 ms-3" style={{ color: "red" }}>
          Please enter all the fields
        </h6>
      </div>
    );
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      {errorMessage()}
                      {successMessage()}
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              onChange={userregister}
                              type="email"
                              id="form3Example1c"
                              name="email"
                              //   value={usersignup.email}
                              className="form-control"
                            />
                            <label className="form-label" for="form3Example1c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              onChange={userregister}
                              type="text"
                              id="form3Example3c"
                              name="password"
                              //   value={usersignup.password}
                              className="form-control"
                            />
                            <label className="form-label" for="form3Example3c">
                              Your Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              onChange={userregister}
                              type="password"
                              id="form3Example4c"
                              name="password2"
                              //   value={usersignup.password2}
                              className="form-control"
                            />
                            <label className="form-label" for="form3Example4c">
                              Confirm Password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              onChange={userregister}
                              type="password"
                              id="form3Example4c"
                              name="first_name"
                              //   value={usersignup.first_name}
                              className="form-control"
                            />
                            <label className="form-label" for="form3Example4c">
                              First Name
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              onChange={userregister}
                              type="password"
                              id="form3Example4c"
                              name="last_name"
                              //   value={usersignup.last_name}
                              className="form-control"
                            />
                            <label className="form-label" for="form3Example4c">
                              Last Name
                            </label>
                          </div>
                        </div>

                        <div className="mb-7">
                          <h5>
                            {" "}
                            Already have an account?{" "}
                            <NavLink to="/signin">Login</NavLink>{" "}
                          </h5>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            onClick={Register}
                            type="button"
                            class="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
