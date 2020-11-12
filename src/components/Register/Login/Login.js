import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
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
    fontSize: "30px",
    height: 38,
    width: 260,
  },
});

const Login = (props) => {
  const { classes } = props;
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  const registerUser = () => {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email)) {
      alert("Invalid email")
      return;
    } else if(!(password.length > 3 && password.length < 10)) {
      alert("Invalid password")
      return;
    } 

    fetch(`http://localhost:2000/login`, {
      method: "POST",
      body: JSON.stringify({
        email : email.trim(),
        password : password.trim()
      }),
      headers: {
        "Content-type": "application/json",
      }
    }).then(res => {
      if(res.status === 200 && res.message === "success") alert("Logged in successfully")
      else alert("User not found")
    })

  }
  return (
    <div className="col-md-6 login-form m-sm-3">
      <div className="form-list mt-3">
        <h1 className="text-center">Login</h1>
        <p className="text-center p-2 pb-0">
          And enjoy life during the time you just saved!
        </p>
        <div className="form-valied">
          <div className="col-md-4 p-0 form-inline">
            <label className="mb-2">Email Id</label>
            <TextField
                // id="outlined-search"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                size="small"
                className={classes.input}
              />
          </div>
          <div className="col-md-4 p-0 form-inline">
            <label className="mb-2">Password</label>
            <TextField
                // id="outlined-search"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                size="small"
                className={classes.input}
              />
          </div>

          <Button className={classes.button} onClick={registerUser} >Login</Button>
          <p className="px-2">
            Don't have account?{" "}
            <span>
              <NavLink to="/sign-up">Sign Up</NavLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Login);
