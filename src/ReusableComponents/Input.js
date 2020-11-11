import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "20px",
    background: "#f9fafa",
    boxShadow: "inset 17px 17px 34px #e5e6e6,inset -17px -17px 34px #ffffff",
  },
}));

const Input = (props) => {
  const classes = useStyles();
  return (
    <div>
      <TextField
        id="outlined-search"
        label={props.label}
        type={props.type}
        name={props.name}
        onChange={props.changeHandler}
        style={{ width: 250 }}
        size="small"
        className={classes.root}
      />
    </div>
  );
};
export default Input;
