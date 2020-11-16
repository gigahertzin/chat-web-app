import React from "react";

const Receiver = (props) => {
  return (
    <div className="msg left-msg">
      <div className="msg-img"></div>

      <div className="msg-box">
        <div className="msg-info">
          <div className="msg-info-name">{props.message.receiver}</div>
          <div className="msg-info-time">{props.message.timeStamp}</div>
        </div>

        <div className="msg-text">{props.message.message}</div>
      </div>
    </div>
  );
};

export default Receiver;
