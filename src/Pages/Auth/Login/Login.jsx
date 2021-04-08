//Import-React:
import React, { Component } from 'react';
//Import-Style:
import '../style.css';
//Import-Components:
import AuthLayout from '../../../Components/Templates/AuthLayout/AuthLayout';

//Main-Components:
export default class Login extends Component {
  handlePushPath = () => {
    this.props.history.push('/dashboard')
  }
  componentDidMount(){
    alert('Langsung Saja Klik Tombol Sign In Atau Klik Forgot? untuk melihat desain layout yang lainnnya')
  }
  render() {
    return (
      <div className="auth-container">
        <div className="left-side">
          <AuthLayout authTitle="Welcome Back, Please login into your account" login={true} link="/forgotpass" onClick={this.handlePushPath}/>
        </div>
        <div className="right-side">
        </div>
      </div>
    )
  }
}
