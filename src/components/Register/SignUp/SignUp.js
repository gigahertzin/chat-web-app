import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core";
import UploadButton from "../../../ReusableComponents/UploadButtons";
import Input from "../../../ReusableComponents/Input";
import "./SignUp.css";

const styles = (theme) => ({
  button: {
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(-160deg, #0093E9 42%, #80D0C7 82%)",
    border: 0,
    borderRadius: 4,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .1)",
    color: "white",
    margin: "20px 0px",
    height: 40,
    width: 100,
    padding: "0 30px",
  },
  input: {
    borderRadius: "10px",
    background: "#f9fafa",
    boxShadow: "inset 10px 10px 64px #eff0f0,inset -10px -10px 64px #ffffff",
    fontSize: "30px",
    height: 38,
    width: 260,
  },
});

const SignUp = (props) => {
  // let {name, setName} = useState('')
  // let {email, setEmail} = useState('')
  // let {password, setPassword} = useState('')
  // let {result, setResult} = useState('')
  const { classes } = props;
  const onLoadInput = (e) => {
    console.log(e.target);
  };
  return (
    <div className="col-md-6 login-form">
      <div className="form-list mt-3 text-center">
        <h3>Sign Up</h3>
        <p>And enjoy life during the time you just saved!</p>
        <UploadButton />
        <div className="d-flex form-div mb-4">
          <div className="col-md-6 p-0 form-inline">
            <label className="mb-2 m-0">Name</label>
            <Input
              class={classes.input}
              type="text"
              name="Name"
              changeHandler={onLoadInput}
            />
          </div>
          <div className="col-md-6 p-0 form-inline">
            <label className="mb-2 m-0">Email Id</label>
            <Input
              class={classes.input}
              type="email"
              name="email"
              changeHandler={onLoadInput}
            />
          </div>
        </div>
        
        <div className="d-flex form-div mb-4">
          <div className="col-md-6 p-0 form-inline">
          <label className="mb-2 m-0">Create password</label>
            <Input
              class={classes.input}
              type="password"
              name="password"
              changaHandler={onLoadInput}
            />
          </div>
          <div className="col-md-6 p-0 form-inline">
          <label className="mb-2 m-0">Confirm password</label>
            <Input
              class={classes.input}
              type="password"
              name="password"
              changaHandler={onLoadInput}
            />
          </div>
        </div>
      
        <Button className={classes.button}>Register</Button>
        <p>
          Already have an account?
          <span>
            <a href="#">Sign in</a>
          </span>
        </p>
      </div>
    </div>
  );
};
export default withStyles(styles)(SignUp);
