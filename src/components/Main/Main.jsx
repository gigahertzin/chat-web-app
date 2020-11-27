import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Chat from "./Chat/Chat";
import Message from "./Message/Message";
import "./Main.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const ENDPOINT = "http://localhost:2000";
const socket = io(ENDPOINT);

const Main = (props) => {
  const { email } = props.currentUser;
  const [receiver, setReceiver] = useState({})
  let [message, setMessage] = useState("");
  let [messages, setMessages] = useState([]);
  let [usersOnline, setUsersOnline] = useState([]);
  let [currMsgScreen, setCurrMsgScreen] = useState(""); 
  let { path } = useRouteMatch();
  useEffect(() => {
    socket.emit("new", { email }, (data) => {
      if (data) console.log("joined");
      else console.log("failed");
    });
  }, [email]);
  useEffect(() => {
    const changeMsg = (data) => {
      console.log(data.msgDetail.sender , currMsgScreen)
      if(data.msgDetail.sender === currMsgScreen) 
        setMessages((prevArr) => [...prevArr, data.msgDetail]);
    }
    socket.on("getMsg", changeMsg);
    return () => {
      socket.off("getMsg", changeMsg);
    };
  }, [messages, currMsgScreen]);

  useEffect(() => {
    const checkOnlineStatus = (data) => {
      if (data !== undefined) {
        let users = data.filter((user) => user.email !== email);
        setUsersOnline(users);
      }
    };
    socket.on("users", checkOnlineStatus);
    return () => {
      socket.off("users", checkOnlineStatus);
    };
  }, [usersOnline, email]);

  const fetchMessages = async (user) => {
    setReceiver(user);
    const url = "http://localhost:2000/:chatId";
    const res = await fetch(`${url}/${email}/${user.email}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    let oldMessages = await res.json();
    setMessages(oldMessages.messages);
  };
  const helper = async (e) => {
    if (e.key === "Enter" && message.trim() !== "") {
      const url = "http://localhost:2000/:chatId";
      let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          message,
          sender: email,
          receiver: receiver.email,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (res.status === 201) {
        let response = await res.json();
        let newMessage = response.newMessage;
        setMessages((prevArr) => [...prevArr, newMessage]);
        socket.emit("sendMsg", { msgDetail: newMessage });
        e.target.value = "";
      }
    }
  };

  const saveMessage = (e) => setMessage(e.target.value);

  const chatClick = user => {
    setCurrMsgScreen(user.email);
    console.log(user)
  }

  const logout = () => {
    props.logoutUser()
    socket.emit("logout", {email}, data => {
      if(data) console.log("logged out!!!")
      else console.log("Error")
    })
  }

  return (
    <div className="container-fluid main-div d-flex p-0 py-2">
      <Chat
        chatClick = {chatClick}
        logout = {logout}
        // logoutUser = {props.logoutUser}
        currentUser={props.currentUser}
        users={props.users}
        usersOnline={usersOnline}
        fetchMessages={fetchMessages}
      />
      <Switch>
        <Route path={`/:chatId`}>
          <Message
            email={email}
            messages={messages}
            helper={helper}
            saveMessage={saveMessage}
          />
        </Route>
        <Route exact path={path}>
          <h3>Please select a chat.</h3>
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
