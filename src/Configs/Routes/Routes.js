//Import-React:
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Component } from 'react';
//Import-Components:
import Login from '../../Pages/Auth/Login/Login';

//Main-Components:
export default class Routes extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' component={Login} />
          </Switch>
        </Router>
    )
  }
}
