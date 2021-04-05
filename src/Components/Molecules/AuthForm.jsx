//Import-React:
import React from 'react';
import PropTypes from 'prop-types';
//Import-Style:
import './style.css';
//Import-Components:
import Form from '../Atoms/forms/Form';
import Button from '../Atoms/Button/Button';
//Import-Assets:
import Logo from '../../Assets/Images/Full Logo Full Color.png';

//Main-Components:
export default function AuthForm({authTitle}) {
  return (
    <div>
      <div id="logo">
        <img src={Logo} alt="Logo Omni" />
      </div>
      <h1 id="auth-title">{authTitle}</h1>
      <Form title="Username/Email" />
      <Form addon={true} title="password" type="password" addonTitle="forgot?" />
      <div id="button-auth">
        <Button title="Sign In" block={true} />
      </div>
    </div>
  )
}

//Default-Props:
AuthForm.defaultProps = {
  authTitle: 'Welcome Back, Please login into your account'
}
//Props-Type:
Form.propTypes = {
  authTitle: PropTypes.string
};