//Import-React:
import React from 'react';
import PropsType from 'prop-types';
//Import-Style:
import './style.css';

//Main-Components:
export default function UserInfo({username, userEmail}) {
  return (
    <div id="user-info">
      <div id="user-data">
        <h1>Hi, {username}</h1>
        <p>{userEmail}</p>
      </div>
      <div id="user-icon">
        <i class="fas fa-user-circle"></i>
      </div>
    </div>
  )
}

//Default-Props:
UserInfo.defaultProps = {
  username: 'username',
  userEmail: 'user@gmail.com'
}
//Props-Type:
UserInfo.PropsType = {
  username: PropsType.string,
  userEmail: PropsType.string
}
