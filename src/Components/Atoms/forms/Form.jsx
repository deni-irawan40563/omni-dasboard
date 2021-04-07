//Import-React:
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Import-Style:
import './style.css';

//Main-Components:
export default function Form({title, type, name, addonTitle, addon, link, addonLink}) {
  if(addonLink){
    return (
      <>
        <label id="label-form">{title}</label>
        <div id="container-input">
          <input type={type} name={name} id="input-addon"/>
          <Link to={link} className="addon">{addonTitle}</Link>
        </div>
      </>
    )
  }
  if(addon){
    return (
      <>
        <label id="label-form">{title}</label>
        <div id="container-input">
          <input type={type} name={name} id="input-addon"/>
          <Link to={link} className="addon">{addonTitle}</Link>
        </div>
      </>
    )
  }
  return (
    <>
      <label id="label-form">{title}</label>
      <input type={type} name={name} id="input"/>
    </>
  )
}

//Default-Props:
Form.defaultProps = {
  title: 'this form from atoms components',
  type: 'text',
  addonTitle: 'addon?',
  addon: false,
  link: '/'
}

//Props-Type:
Form.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  addonTitle: PropTypes.string,
  addon: PropTypes.bool,
  link: PropTypes.string
};