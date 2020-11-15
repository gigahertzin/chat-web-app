import React from "react";
import "./Message.css";
import Receiver from "./Receiver/Receiver";
import Sender from "./Sender/Sender";

const Message = (props) => {
  const saveMessage = (e) => {
    if(e.key === "Enter") {
      alert("Saved")
    }
  }
  return (
    <div className="col-md-9 chat-background position-relative h-100 d-flex flex-column p-0 pl-3">
      <div className="messages w-100">
        <div className="msg-scroll px-2">
          <Receiver />
          <Sender />
        </div>
      </div>

      <div className="chat-inputBox w-100 pr-5">
        <form className="msger-inputarea d-flex px-3 py-2" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            className="msger-input px-3 py-2"
            placeholder="Enter your message..."
            onKeyDown={saveMessage}
          />
          <button type="submit" className="msger-send-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default Message;
