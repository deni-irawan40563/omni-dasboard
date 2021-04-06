//Import-React:
import React, { Component } from 'react';
//Import-Style:
import '../style.css';
//Import-Components:
import AuthLayout from '../../../Components/Templates/AuthLayout/AuthLayout';

//Main-Components:
export default class Forgotpass extends Component {
  render() {
    return (
      <div className="auth-container">
        <div className="left-side">
          <AuthLayout authTitle="Please input your email address" forgotpass={true}/>
        </div>
        <div className="right-side">
        </div>
      </div>
    )
  }
}
