//Import-React:
import React from 'react';
import PropsType from 'prop-types';
//Import-Style:
import './style.css';

//Main-Components:
export default function InputMessage({title, placeholder}) {
  return (
    <>
      <label>{title}</label>
      <input type="text" placeholder={placeholder} id="broadcast-name"/>
    </>
  )
}

//Default-Props:
InputMessage.defaultProps = {
  title: 'input message',
  placeholder: 'please add placeholder'
}
//Props-Type:
InputMessage.PropsType = {
  title: PropsType.string,
  placeholder: PropsType.string
}