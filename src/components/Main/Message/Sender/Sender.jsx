import React from "react";

const Sender = (props) => {
  
  return (
    <div className={`msg ${props.msgClass}`}>
      <div className="msg-img"></div>

      <div className="msg-box">
        <div className="msg-info">
          <div className="msg-info-name">{props.message.sender} </div>
          <div className="msg-info-time">{props.message.timeStamp}</div>
        </div>

        <div className="msg-text">{props.message.message}</div>
      </div>
    </div>
  );
};

export default Sender;
