import React from "react";
import "./Chat.css";
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Status from "./Status/Status";
import UserChat from "./UserChat/UserChat";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import SettingsIcon from '@material-ui/icons/Settings';
const styles = (theme) => ({
  button: {
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(-160deg, #0093E9 42%, #80D0C7 82%)",
    border: 0,
    borderRadius: 4,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .1)",
    color: "white",
    margin: "10px 0px 0px 0px",
    height: 40,
    width: 100,
    padding: "0 30px",
  },
  input: {
    borderRadius: "10px",
    background: "#f9fafa",
    boxShadow: "inset 10px 10px 64px #eff0f0,inset -10px -10px 64px #ffffff",
    fontSize: "38px",
    height: 38,
    width: "100%",
  },
  resize:{
    fontSize:23,
    marginTop:4
  },
});
const Chat = (props) => {
  const { classes } = props;
  return (
    <div className="col-md-3 p-0 chat-content-box px-2">
      <div className="profile-card d-flex flex-column align-items-center justify-content-center p-2 w-100 h-auto">
        <img
          src="http://ableproadmin.com/bootstrap/default/assets/images/user/avatar-2.jpg"
          className="img-fluid profile-image"
          height="90px"
          width="90px"
          alt="profile-tag"
        />
        <h4 className="mt-2">
          Bill Bradford <SettingsIcon />
        </h4>
        <h6 className="role m-0">Lead UX/UI Designer</h6>
        <Button className={classes.button} >LOGOUT</Button>
      </div>
      <hr className="my-2"/>
      <div className="online-status px-2">
        <div className="online-header d-flex align-items-center justify-content-between w-100">
          <h6 className="m-0">Online now</h6>
          <span className="badge badge-dark m-0 mr-2">4</span>
        </div>
        <div className="online-members d-flex mt-2">
          <Status />
          <Status />
          <Status />
          <Status />
          <Status />
          <Status />
          <Status />
          <Status />
        </div>
      </div>
      <hr className="m-0 mt-2 mb-1"/>
      <div className="chat-people px-2">
        <div className="online-header">
          <h6 className="text-left m-0 mb-1 ml-2">Chats</h6>
          <TextField
            type="text"
            name="Search for chat"
            placeholder="Search for Chats"
            size="small"
            className={classes.input}
            InputProps={{
              fontSize:23,
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
              classes: {
                input: classes.resize,
              },
            }}
          />
        </div>
        <div className="contact-people w-100 mt-2 position-relative">
          <UserChat />
          <UserChat />
          <UserChat />
          <UserChat />
          <UserChat />
          <UserChat />
          <UserChat />
          <UserChat />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Chat);
