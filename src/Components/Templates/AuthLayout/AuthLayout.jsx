//Import-React:
import React from 'react';
import PropTypes from 'prop-types';
//Import-Style:
import './style.css';
//Import-Components:
import AuthForm from '../../Molecules/AuthForm';

//Main-Components:
export default function AuthLayout({authTitle, register, forgotpass, login, link}) {
  if(login){
    return (
      <AuthForm authTitle={authTitle} login={login} link={link}/>
    )
  }
  if(register){
    return (
      <AuthForm authTitle={authTitle} register={register}/>
    )
  }
  if(forgotpass){
    return (
      <AuthForm authTitle={authTitle} forgotpass={forgotpass}/>
    )
  }
  return <h1>Please Input</h1>
}

//Default-Props:
AuthLayout.defaultProps = {
  authTitle : 'This Is AuthLayout on Template Components',
  login: false,
  register: false,
  forgotpass: false
}
//Props-Type:
AuthLayout.propTypes = {
  authTitle: PropTypes.string,
  login: PropTypes.bool,
  register: PropTypes.bool,
  forgotpass: PropTypes.bool
}
