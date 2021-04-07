//Import-React:
import React from 'react';
//Import-Style:
import './style.css';
//Import-Components:
import CheckBox from '../../Atoms/CheckBox/CheckBox';

//Main-Components:
export default function CheckBoxGroup() {
  return (
    <div id="check-box-group">
      <CheckBox title="Mon" />
      <CheckBox title="Tue" />
      <CheckBox title="Wed" />
      <CheckBox title="Thu" />
      <CheckBox title="Fri" />
      <CheckBox title="Sat" />
      <CheckBox title="Sun" />
    </div>
  )
}
