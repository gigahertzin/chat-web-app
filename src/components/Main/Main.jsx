import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Chat from "./Chat/Chat";
import Message from "./Message/Message";
import "./Main.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
let socket;
const Main = (props) => {
  const { email } = props.currentUser;
  let [usersOnline, setUsersOnline] = useState([])
  const [receiver, setReceiver] = useState({})
  let [messages, setMessages] = useState([])
  let [message, setMessage] = useState('')
  const ENDPOINT = "http://localhost:2000";
  let { path } = useRouteMatch()
  socket = io(ENDPOINT);
  useEffect(() => {
    socket.emit("new", { email : email }, (data) => {
      if(data) console.log("joined")
      else console.log("failed")
    })
  },[email]);
  socket.on("users", data => {
    setUsersOnline(data)
    console.log(usersOnline)
  })
  socket.on("sendMsg", (data) => {
    let { msgDetail } = data
    setMessages(prevArr => [...prevArr, msgDetail])
  })
  const fetchMessages = async (user) => {
    setReceiver(user)
    const url = "http://localhost:2000/:chatId";
    const res = await fetch(`${url}/${email}/${user.email}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      }
    })
    let oldMessages = await res.json()
    setMessages(oldMessages.messages)
  }
  const helper = async (e) => {
    if(e.key === "Enter" && message.trim() !== "") {

      const url = "http://localhost:2000/:chatId";
      let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          message,
          sender : email,
          receiver : receiver.email
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
      if(res.status === 201) {
        let newMessage = await res.json()
        socket.emit("getMsg", {msgDetail : newMessage.newMessage}, (data) => {
          setMessages(prevArr => [...prevArr, newMessage.newMessage])
        })
        e.target.value = ""
      }
    }
    
  }

  const saveMessage = (e) => setMessage(e.target.value)

  return (
    <div className="container-fluid main-div d-flex p-0 py-2">
      <Chat currentUser={props.currentUser} users={props.users} fetchMessages={fetchMessages}/>
      <Switch>
        <Route path={`/:chatId`}>
          <Message messages={messages} helper={helper} saveMessage={saveMessage}/>
        </Route>
        <Route exact path={path}>
          <h3>Please select a chat.</h3>
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
