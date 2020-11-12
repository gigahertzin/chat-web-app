import React, { useState } from "react";
import group from "../../images/group.svg";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import "./Register.css";
const Register = () => {
  let [auth, setAuth] = useState(false)

  const changeAuth = () => setAuth(!auth)
  
  let form = (!auth) ?  <Login changeAuth={changeAuth} /> : <SignUp changeAuth={changeAuth} />

  return (
    <div className="container-fluid login-sec my-3 px-5 px-sm-0 px-md-4 px-lg-5 d-flex align-items-center justify-content-center">
      <div className="d-flex content-div px-3 align-items-center justify-content-center m-0">
        {form}
        <div className="col-md-6 image-div">
          <img
            src={group}
            height="100%"
            width="100%"
            alt="login-banner"
            className="img-fluid login-image"
          />
        </div>
      </div>
    </div>
  );
};
export default Register;
