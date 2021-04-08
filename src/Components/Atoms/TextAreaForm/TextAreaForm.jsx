//Import-React:
import React from 'react';
//import-Style:
import './style.css';

//Main-Components:
export default function TextAreaForm() {
  return (
    <div id="text-area-form">
      <textarea type="text" placeholder="Select your phonebook" id="broadcast-message"/>
      <div id="text-area-count">
        <small>Character 0/1024</small>
      </div>
    </div>
  )
}
