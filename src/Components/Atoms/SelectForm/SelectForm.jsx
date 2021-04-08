//Import-React:
import React from 'react';
import PropsType from 'prop-types';
//Import-Style:
import './style.css';

//Main-Components:
export default function SelectForm({leftText, rightText, title, disabled}) {
  return (
    <div id="custom-select">
      <span>{leftText}</span>
        <select  disabled={disabled}>
          <option value={title}>{title}</option>
          <option value="#">Data</option>
          <option value="#">Data</option>
          <option value="#">Data</option>
          <option value="#">Data</option>
          <option value="#">Data</option>
        </select>
      <span>{rightText}</span>
    </div>
  )
}

//Default-Props:
SelectForm.defaultProps = {
  title: 'title',
  leftText: '',
  rightText: '',
  disabled: ''
}
//Props-Type:
SelectForm.PropsType = {
  title: PropsType.string,
  leftText: PropsType.string,
  rightText: PropsType.string,
  disabled: PropsType.string
}
