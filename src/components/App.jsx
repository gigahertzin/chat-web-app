import React, { useState } from "react";
import "./App.css";
import {
  Redirect,
  Route,
  withRouter,
  Switch,
  useHistory,
} from "react-router-dom";
import Register from "./Register/Register";
import Main from "./Main/Main";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

const App = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loggedIn, setLoggedIn] = useState(false);
  let [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useState([]);

  const history = useHistory();
  const inputHandler = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    else setPassword(e.target.value);
  };

  const loginUser = async () => {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email");
      return;
    } else if (!(password.length > 3 && password.length < 10)) {
      alert("Invalid password");
      return;
    }
    const url = "http://localhost:2000/login";
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email.trim(),
        password: password.trim(),
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (res.status === 200) {
      setLoggedIn(true);
      let userDetails = await res.json();
      setUsers(userDetails.users.filter((user) => user.email !== email));
      setCurrentUser(userDetails.users.find((user) => user.email === email));
      history.push("/");
    } else if (res.status === 404) alert("user not found");
    else if (res.status === 401) alert("Incorrect password");
    else alert("Error in creating user");
  };
  const logoutUser = () => setLoggedIn(false)
  return (
    <Switch>
      <Route exact path="/">
        {loggedIn ? (
          <Main currentUser={currentUser} logoutUser={logoutUser} users={users} />
        ) : (
          <Redirect exact to="/getting-started" />
        )}
      </Route>

      <Route path="/getting-started">
        {!loggedIn ? (
          <Register inputHandler={inputHandler} loginUser={loginUser} />
        ) : (
          <Redirect exact to="/" />
        )}
      </Route>
      <Route path={`/:chatId`}>
        {loggedIn ? (
          <Main currentUser={currentUser} users={users} />
        ) : (
          <Redirect exact to="/getting-started" />
        )}
      </Route>
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default withRouter(App);
