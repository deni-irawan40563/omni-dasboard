//Import-React:
import React from 'react';
//Import-Style:
import './style.css';
//Import-Components:
import Button from '../../Atoms/Button/Button';
import CheckBoxGroup from '../../Molecules/CheckBoxGroup/CheckBoxGroup';
import MessageInfoGroup from '../../Molecules/MessageInfoGroup/MessageInfoGroup';
import SelectFormGroup from '../../Molecules/SelectFormGroup/SelectFormGroup';

//Main-Components:
export default function SmsSchdullerItems() {
  return (
    <div id="sms-schedule">
      <div> 
        <MessageInfoGroup />      
      </div>
      <hr />
      <div id="schedule-title">
        <h1>Schedule</h1>
        <small>When and how often do you want to broadcast this messages?</small>
      </div>
      <div id="schedule-info">
        <p>Run On</p>
        <div>
          <CheckBoxGroup />
          <SelectFormGroup />
        </div>
      </div>
      <div className="send-message">
        <Button title="send message"/>
      </div>
    </div>
  )
}
