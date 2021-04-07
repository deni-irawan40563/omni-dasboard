//Import-React:
import React from 'react';
import {Link} from 'react-router-dom'
//Import-Style:
import './style.css';

//Main-Components:
export default function Card() {
  return (
    <div id="card">
      <h1>Hello, Welcome to OCA!</h1>
      <h4>Let’s start make some noise and make your campaign great again! click <Link to='/' id="link-card">here</Link> to spread your messages.</h4>
    </div>
  )
}
