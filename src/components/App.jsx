import { Component } from "react";
import "./App.css";
import { Redirect, Route, withRouter, Switch } from "react-router-dom";
import Register from "./Register/Register";
import Main from "./Main/Main";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

class App extends Component {
  render() {
    let email = localStorage.getItem("email")
    return (
      <Switch>
        
          <Route exact path="/">
            { email !== null ? (
              <Main />
            ) : (
              <Redirect exact to="/getting-started" />
            )}
          </Route>

          <Route path="/getting-started">
          {email === null ? (
            <Register/>
          ) : (
            <Redirect exact to="/" />
          )}
        </Route>

        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}

export default withRouter(App)
