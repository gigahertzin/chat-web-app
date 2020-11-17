import React from "react";
import "./Message.css";
import Receiver from "./Receiver/Receiver";
import Sender from "./Sender/Sender";

const Message = (props) => {
  return (
    <div className="col-md-9 chat-background position-relative h-100 d-flex flex-column p-0 pl-3">
      <div className="messages w-100">
        <div className="msg-scroll px-2">
          {
            props.messages.map((message, index) => {
              if(props.email === message.sender){
                return <Sender message={message} key={index}/>
              } else return <Receiver message={message} key={index}/>
            })
          }
          
        </div>
      </div>

      <div className="chat-inputBox w-100 pr-5">
        <form className="msger-inputarea d-flex px-3 py-2" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            name="message"
            className="msger-input px-3 py-2"
            placeholder="Enter your message..."
            onKeyPress={props.helper}
            onChange={props.saveMessage}
          />
          <button className="msger-send-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default Message;
