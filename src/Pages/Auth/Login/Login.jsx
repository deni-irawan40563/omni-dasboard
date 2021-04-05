import React, { Component } from 'react';
import AuthLayout from '../../../Components/Templates/AuthLayout/AuthLayout';
import '../style.css';

export default class Login extends Component {
  render() {
    return (
      <div id="login-container">
        <div className="left-side">
          <AuthLayout />
        </div>
        <div className="right-side">
        </div>
      </div>
    )
  }
}
