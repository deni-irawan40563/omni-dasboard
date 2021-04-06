//Import-React:
import React, { Component } from 'react';
//Import-Style:
import '../style.css';
//Import-Components:
import AuthLayout from '../../../Components/Templates/AuthLayout/AuthLayout';

//Main-Components:
export default class Login extends Component {
  render() {
    return (
      <div className="auth-container">
        <div className="left-side">
          <AuthLayout authTitle="Welcome Back, Please login into your account" login={true} link="/forgotpass"/>
        </div>
        <div className="right-side">
        </div>
      </div>
    )
  }
}
