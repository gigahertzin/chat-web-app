import React from "react";
const Status = () => {
  return (
    <div className="icon-container mx-2 position-relative">
      <img
        alt="user-status"
        src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png"
      />
      <div className="status-circle position-absolute"></div>
    </div>
  );
};
export default Status;
