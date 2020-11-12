import { Component } from "react";
import "./App.css";
import { Redirect, Route, withRouter, Switch } from "react-router-dom";
import Register from "./Register/Register";
import Main from "./Main/Main";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuth : false
    }
  }
  render() {
    return (
      <Switch>    
          <Route path="/login">
          {localStorage.getItem("email") === null ? (
            <Register auth={this.state.isAuth}/>
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/">
          {localStorage.getItem("email") !== null ? (
            <Main />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
    )
  }
}

export default withRouter(App)
