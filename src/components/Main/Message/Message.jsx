import React from "react";
import "./Message.css";
import Receiver from "./Receiver/Receiver";
import Sender from "./Sender/Sender";

const Message = () => {
  return (
    <div className="col-md-9 chat-background position-relative h-100 d-flex flex-column p-0 pl-3">
      <div className="messages w-100">
        <div className="msg-scroll px-2">
          <Receiver />
          <Sender />
          <Receiver />
          <Sender />
          <Receiver />
          <Sender />
          <Receiver />
          <Sender />
        </div>
      </div>

      <div className="chat-inputBox w-100 pr-5">
        <form className="msger-inputarea d-flex px-3 py-2">
          <input
            type="text"
            className="msger-input px-3 py-2"
            placeholder="Enter your message..."
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
