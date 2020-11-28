import React from "react";
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
  return (
    <div className="col-md-6 login-form">
      <div className="form-list mt-3">
        <h1 className="text-center">Login</h1>
        <p className="text-center p-2 pb-0">
          And enjoy life during the time you just saved!
        </p>
        <div className="form-valied d-flex flex-column align-items-center justify-content-center">
          <div className="form-inline d-flex flex-column">
            <label className="m-2 mr-auto">Email Id</label>
            <TextField
              inputProps={{ style: { fontSize: 23 } }}
              type="email"
              name="email"
              onChange={props.inputHandler}
              size="small"
              className={classes.input}
            />
          </div>
          <div className="form-inline d-flex flex-column align-items-left">
            <label className="m-2 mr-auto">Password</label>
            <TextField
              inputProps={{ style: { fontSize: 23 } }}
              type="password"
              name="password"
              onChange={props.inputHandler}
              size="small"
              className={classes.input}
            />
          </div>

          <Button className={classes.button} onClick={props.loginUser}>
            Login
          </Button>
          <p className="px-2">
            Don't have account?{" "}
            <span className="sign-up" onClick={props.changeAuth}>
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Login);
