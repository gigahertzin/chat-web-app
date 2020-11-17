import React from "react";
const Status = (props) => {
  return (
    <div className="icon-container mx-2 position-relative">
      <img
        alt="user-status"
        title={`${props.email}`}
        src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png"
      />
      <div className="status-circle position-absolute"></div>
      <p style={{ fontSize: "8px" }}>{`${props.email}`}</p>
    </div>
  );
};
export default Status;
