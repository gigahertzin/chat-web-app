import { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Register from "./Register/Register";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect exact to="/login" />} />
          <Route path="/login" component={Register} />
          <Route path="/sign-up" component={Register} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
