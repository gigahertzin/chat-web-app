import React from "react";
const Status = (props) => {
  return (
    <div className="icon-container d-flex flex-column align-items-center justify-content-center mx-2">
      <div className="status-img position-relative">
        <img
          alt="user-status"
          title={`${props.email}`}
          src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png"
        />
        <div className="status-circle position-absolute"></div>
      </div>
      <p className="m-0 mt-1 d-inline" style={{ fontSize: "8px" }}>{`${props.email}`}</p>
    </div>
  );
};
export default Status;
