//Import-React:
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Component } from 'react';
//Import-Components:
import Login from '../../Pages/Auth/Login/Login';
import Register from "../../Pages/Auth/Register/Register";
import Forgotpass from "../../Pages/Auth/ForgotPass/ForgotPass";
import Dashboard from "../../Pages/Dashboards/Dashboards";
import SmsSchduller from "../../Pages/Dashboards/SmsSchduller";

//Main-Components:
export default class Routes extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' component={Login} exact/>
            <Route path='/register' component={Register} exact/>
            <Route path='/forgotpass' component={Forgotpass} exact/>
            <Route path='/dashboard' component={Dashboard} exact/>
            <Route path='/smsschduller' component={SmsSchduller} exact/>
          </Switch>
        </Router>
    )
  }
}
