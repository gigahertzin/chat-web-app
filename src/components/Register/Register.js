import React from "react";
import { Route, Switch } from "react-router-dom";
import group from "../../images/group.svg";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import "./Register.css";
const Register = () => {
  return (
    <div className="container-fluid login-sec mt-5">
      <div className="d-flex content-div px-3 align-items-center justify-content-center m-0">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
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
