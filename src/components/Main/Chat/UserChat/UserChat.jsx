import React from "react";

const UserChat = (props) => {
  return (
    <div className="user-chat d-flex align-items-center w-100 p-2">
      <img
        src="http://ableproadmin.com/bootstrap/default/assets/images/user/avatar-2.jpg"
        alt=""
        className="float-left"
      />
      <div className="d-flex flex-column chat-detail">
        <h6 className="text-center text-capitalize m-0 ml-3">{props.user.name}</h6>
        <p className="text-center m-0 ml-3">{props.user.email}</p>
      </div>
    </div>
  );
};
export default UserChat;
