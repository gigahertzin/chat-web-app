import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core";
import UploadButton from "../../ReusableComponents/UploadButtons";
import TextField from "@material-ui/core/TextField";
import { NavLink } from "react-router-dom";

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
    const response = await fetch(url, {
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
    const res = await response.json()
    //.then(res => res.json())
    // .then(res => {
    //   console.log(res)
    //   if(res.status === 200 && res.message === "success") alert("User registered")
    //   // else if() alert("User already exists")
    // })

  }

  return (
    <div className="col-md-6 login-form">
      <div className="form-list mt-3 text-center">
        <h3>Sign Up</h3>
        <p>And enjoy life during the time you just saved!</p>
        <UploadButton />
        <div className="d-flex form-div mb-4">
          <div className="col-md-6 p-0 form-inline d-flex flex-column">
            <label className="mb-2 m-0">Name</label>
              <TextField
                // id="outlined-search"
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                size="small"
                className={classes.input}
              />
          </div>
          <div className="col-md-6 p-0 form-inline d-flex flex-column">
            <label className="mb-2 m-0">Email Id</label>
            <TextField
                // id="outlined-search"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                size="small"
                className={classes.input}
              />
          </div>
        </div>

        <div className="d-flex form-div mb-4">
          <div className="col-md-6 p-0 form-inline d-flex flex-column">
            <label className="mb-2 m-0">Create password</label>
            <TextField
                // id="outlined-search"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                size="small"
                className={classes.input}
              />
          </div>
          <div className="col-md-6 p-0 form-inline d-flex flex-column">
            <label className="mb-2 m-0">Confirm password</label>
            <TextField
                // id="outlined-search"
                type="password"
                name="con-password"
                onChange={(e) => setConPassword(e.target.value)}
                size="small"
                className={classes.input}
              />
          </div>
        </div>

        <Button className={classes.button} onClick={registerUser}>Register</Button>
        <p>
          Already have an account?
          <span>
            <NavLink to="/login">Login</NavLink>
          </span>
        </p>
      </div>
    </div>
  );
};
export default withStyles(styles)(SignUp);
