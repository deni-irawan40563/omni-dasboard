//Import-React:
import React from 'react';
import PropTypes from 'prop-types';
//Import-Style:
import './style.css';
//Import-Components:
import Form from '../../Atoms/forms/Form';
import Button from '../../Atoms/Button/Button';
//Import-Assets:
import Logo from '../../../Assets/Images/Full Logo Full Color.png';

//Main-Components:
export default function AuthForm({authTitle, register, forgotpass, login, link, onClick}) {
  if(login){
    return (
      <div>
        <div id="logo">
          <img src={Logo} alt="Logo Omni" />
        </div>
        <h1 id="auth-title">{authTitle}</h1>
        <Form title="Username/Email" name="Username/Email" />
        <Form addon={true} title="password" type="password" addonTitle="forgot?" name="password" link={link}/>
        <div id="button-auth">
          <Button title="Sign In" block={true} onClick={onClick}/>
        </div>
      </div>
    )
  }
  if(register){
    return (
      <div>
        <div id="logo">
          <img src={Logo} alt="Logo Omni" />
        </div>
        <h1 id="auth-title">{authTitle}</h1>
        <Form title="Email" name="email" type="email" />
        <Form title="Password" name="password" />
        <Form title="Password Confirmation" name="password" type="password" />
        <div id="button-auth">
          <Button title="Create Account" block={true} onClick={onClick}/>
        </div>
      </div>
    )
  }
  if(forgotpass){
    return (
      <div>
        <div id="logo">
          <img src={Logo} alt="Logo Omni" />
        </div>
        <h1 id="auth-title">{authTitle}</h1>
        <Form title="Input Your Email" name="email" type="email" />
        <div id="button-auth">
          <Button title="Send Email" block={true} onClick={onClick}/>
        </div>
      </div>
    )
  }

}

//Default-Props:
AuthForm.defaultProps = {
  authTitle: 'This Is AuthForm on Molecules Components',
  login: false,
  register: false,
  forgotpass: false,
  link: '/',
  onClick: null
}
//Props-Type:
Form.propTypes = {
  authTitle: PropTypes.string,
  login: PropTypes.bool,
  register: PropTypes.bool,
  forgotpass: PropTypes.bool,
  link: PropTypes.string,
  onClick: PropTypes.func
};