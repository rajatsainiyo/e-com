import { Login, Password } from '@mui/icons-material';
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    NavLink,
  } from "react-router-dom";

const Signin=()=> {
    const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

const navigatecomponent = useNavigate();
const[usersign,setUsersign]=useState({

    email:'',
    password:"",
})

const Login =(e)=>{

    const{name,value}=e.target;

    setUsersign({...usersign,[name]:value})
   
}

const loginbtn=()=>{
    const{email,password}=usersign;
    // let arry = [...arry,usersign]
    const mydata =localStorage.getItem("login",JSON.stringify(usersign) )
    console.log(mydata,'mydata');

//  const mydata= localStorage.getItem("user")
//  const signindata=JSON.parse(mydata)
//   if(signindata===null){
//     localStorage.setItem("user",JSON.stringify([usersign]));
//   }else{
//     const usrdata = signindata.filter((val,i)=>{return val.email===email})
//     if(usrdata&&usrdata.length){
//       alert("exist")
//     }else{
//       localStorage.setItem("user",JSON.stringify([...signindata,usersign]))
//     }
//   }

    axios .post(`${process.env.REACT_APP_BASE_URL}/api/v1/login/`,{
        email:email ,
        password:password ,
      

    })
    .then((res)=>{ 
     
   
    })
    if (
        email === "" || password === ""  ) {
        setError(true);
      } else {
        setError(false);
        setSubmitted(true);
        localStorage.setItem("token",true)
     navigatecomponent("/home")

      }
 
}

const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h6 className="ps-4 ms-3" style={{ color: "green" }}>
          User successfully Login!!
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

<div className="container">

<section class="vh-100" >
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-12 col-xl-11">
                            <div class="card text-black"  >
                                <div class="card-body p-md-5">
                                    <div class="row justify-content-center">
                                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>
{errorMessage()}
{successMessage()}
                                            <form class="mx-1 mx-md-4">



                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input onChange={Login}  type="email" id="form3Example3c"
                                                            name='email' class="form-control" />

                                                        <label class="form-label" for="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input onChange={Login} type="password" id="form3Example4c" name='password' class="form-control" />

                                                        <label class="form-label" for="form3Example4c">Password</label>
                                                    </div>
                                                </div>






                                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button onClick={loginbtn} type="button" class="btn btn-primary btn-lg">Sign in</button>
                                                </div>



                                                <div className='mb-2'>

                                                    <h5> New user? <NavLink to="/signup">signUp</NavLink>   </h5>
                                                </div>

                                            </form>


                                        </div>
                                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                class="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

</div>

    </div>
  )
}

export default Signin;