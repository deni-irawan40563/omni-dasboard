//Import-React:
import React from 'react';
//Import-Style:
import './style.css';
//Import-Components:
import InputMessage from '../../Atoms/InputMessage/InputMessage';
import TextAreaForm from '../../Atoms/TextAreaForm/TextAreaForm';

//Main-Components:
export default function MessageInfoGroup() {
  return (
    <div>
      <div id="input-message-group">
        <InputMessage title="Broadcast Name" placeholder="name your broadcast" />
        <InputMessage title="Phonebook" placeholder="Select your phonebook" />
      </div>
      <div id="text-area">
        <p>message</p>
        <TextAreaForm />
      </div>
    </div>
  )
}
