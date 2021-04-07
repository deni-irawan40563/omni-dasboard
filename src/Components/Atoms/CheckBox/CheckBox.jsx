//Import-React:
import React from 'react';
import PropsType from 'prop-types';
//Import-Style:
import './style.css';

//Main-Components:
export default function CheckBox({title}) {
  return (
    <label id="container-check-box">{title}
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
  )
}

//Default-Props
CheckBox.defaultProps = {
  title: 'checkbox'
}
//Props-Type:
CheckBox.PropsType = {
  title: PropsType.string
}