import { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Register from './components/Register/Login/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Register} />
          <Route path="/" render={() => <Redirect exact to="/login" />}/>
        </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
