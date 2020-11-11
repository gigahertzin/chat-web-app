import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import UploadButton from "../../../ReusableComponents/UploadButtons";
import Input from "../../../ReusableComponents/Input";
import "./SignUp.css";
const SignUp  = () => {
  let {name, setName} = useState('')
  let {email, setEmail} = useState('')
  let {password, setPassword} = useState('')
  let {result, setResult} = useState('')

  const onLoadInput = e => {

    console.log(e.target)

  };
  return (
    <div className="col-md-6 login-form">
      <div className="form-list mt-3 text-center">
        <h3>Sign Up</h3>
        <p>And enjoy life during the time you just saved!</p>
        <UploadButton />
        <div className="d-flex form-div mb-4">
          <div className="col-md-6 p-0 form-inline">
            <Input
              label="Name"
              type="text"
              name="Name"
              changeHandler={onLoadInput}
            />
            <span></span>
          </div>
          <div className="col-md-6 p-0 form-inline">
            <Input
              label="E-Mail"
              type="email"
              name="email"
              changeHandler={onLoadInput}
            />
            <span></span>
          </div>
        </div>
        <div className="row form-div mb-1">
          <div className="col-md-4 form-inline"></div>
        </div>
        <Input
          label="Password"
          type="password"
          name="password"
          changaHandler={onLoadInput}
        />
        <Button
          variant="contained"
          color="primary"
          className="mb-4 mt-4"
          onClick={() => {
            alert("Account Created");
          }}
        >
          Create an Account
        </Button>
        <p>
          Already have an account?
          <span>
            <a href="#">Sign in</a>
          </span>
        </p>
      </div>
    </div>
    
  );
}
export default SignUp;
