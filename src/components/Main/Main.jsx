import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Chat from './Chat/Chat'
import Message from './Message/Message'
import "./Main.css";
let socket;
const Main = ({ currentUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const ENDPOINT = "http://localhost:2000";

  useEffect(() => {
    const { name, email } = currentUser;

    socket = io(ENDPOINT);

    setUsername(name);
    setEmail(email);

    socket.emit("join", { email });
    return () => {
      socket.off();
    };
  }, [currentUser, username]);

  return (
    <div className="container-fluid main-div d-flex p-0 py-2">
      <Chat />
      <Message />
    </div>
  );
};

export default Main;
