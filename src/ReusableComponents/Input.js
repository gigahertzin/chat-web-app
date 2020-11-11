import React from "react";
import TextField from "@material-ui/core/TextField";
const Input = (props) => {
  return (
    <div>
      <TextField
        id="outlined-search"
        label={props.label}
        type={props.type}
        name={props.name}
        onChange={props.changeHandler}
        size={props.size}
        className={props.class}
      />
    </div>
  );
};
export default Input;
