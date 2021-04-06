//Import-React:
import React, { Component } from 'react';
//Import-Style:
import '../style.css';
//Import-Components:
import AuthLayout from '../../../Components/Templates/AuthLayout/AuthLayout';

//Main-Components:
export default class Register extends Component {
  render() {
    return (
      <div className="auth-container">
        <div className="left-side side">
          <AuthLayout authTitle="hello wellcome to omni communication assistant" register={true}/>
        </div>
        <div className="right-side">
        </div>
      </div>
    )
  }
}
