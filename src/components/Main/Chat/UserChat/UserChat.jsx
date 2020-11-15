import React from "react";

const UserChat = () => {
  return (
    <div className="user-chat d-flex align-items-center w-100 p-2">
      <img
        src="http://ableproadmin.com/bootstrap/default/assets/images/user/avatar-2.jpg"
        alt=""
        className="float-left"
      />
      <div className="d-flex flex-column chat-detail">
        <h6 className="text-center m-0 ml-3">Dhanush Karthick</h6>
        <p className="text-center m-0 ml-3">dhanush15@gmail.com</p>
      </div>
    </div>
  );
};
export default UserChat;
