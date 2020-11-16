import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core";
import UploadButton from "../../ReusableComponents/UploadButtons";
import TextField from "@material-ui/core/TextField";


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
    height: 38,
    width: 240,
  },
});

const SignUp = props => {

  const { classes } = props;
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [conPassword, setConPassword] = useState('')

  const registerUser = async () => {

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!(name.length > 3 && name.length < 20)) {
      alert("Invalid username")
      return;
    } else if(!emailRegex.test(email)) {
      alert("Invalid email")
      return;
    } else if(!(password.length > 3 && password.length < 10)) {
      alert("Invalid password")
      return;
    } else if(!(password === conPassword)) {
      alert("Password does not match")
      return;
    } 
    const url = "http://localhost:2000/sign-up"
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          name : name.trim(),
          email : email.trim(),
          password : password.trim()
        }),
        headers: {
          "Content-type": "application/json",
        }
      }
    ) 
    if(res.status === 201) {
      props.changeAuth()
    }
    else if(res.status === 403) alert("user already exists")
    else alert("Error in creating user")
  }

  return (
    <div className="col-md-6 login-form px-0">
      <div className="form-list position-relative mt-3 text-center">
        <h3>Sign Up</h3>
        <p>And enjoy life during the time you just saved!</p>
        <UploadButton />
        <div className="d-flex flex-column align-items-center justify-content-center">

          <div className="d-flex flex-wrap align-items-center justify-content-center form-div mb-4">
            <div className="form-inline px-3 d-flex flex-column">
              <label className="m-2 mr-auto">Name</label>
                <TextField
                  inputProps={{style: {fontSize: 23}}}
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  size="small"
                  className={classes.input}
                />
            </div>
            <div className="form-inline px-3 d-flex flex-column">
              <label className="m-2 mr-auto">Email Id</label>
              <TextField
                  inputProps={{style: {fontSize: 23}}}
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  size="small"
                  className={classes.input}
                />
            </div>
          </div>

          <div className="d-flex flex-wrap align-items-center justify-content-around form-div mb-4">
            <div className="form-inline px-3 d-flex flex-column">
              <label className="m-2 mr-auto">Create password</label>
              <TextField
                  inputProps={{style: {fontSize: 23}}}
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  size="small"
                  className={classes.input}
                />
            </div>
            <div className="form-inline px-3 d-flex flex-column">
              <label className="m-2 mr-auto">Confirm password</label>
              <TextField
                  inputProps={{style: {fontSize: 23}}}
                  type="password"
                  name="con-password"
                  onChange={(e) => setConPassword(e.target.value)}
                  size="small"
                  className={classes.input}
                />
            </div>
          </div>
        
        </div>

        <Button className={classes.button} onClick={registerUser}>Register</Button>
        <p>
          Already have an account?{" "}
          <span className="login" onClick={props.changeAuth}>Login </span>
        </p>
      </div>
    </div>
  );
};
export default withStyles(styles)(SignUp);
