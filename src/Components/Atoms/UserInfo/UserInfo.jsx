import React from 'react'
import './style.css'
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
