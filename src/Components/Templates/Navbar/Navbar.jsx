import React from 'react';
import SearchBar from '../../Atoms/SearchBar/SearchBar';
import UserInfo from '../../Atoms/UserInfo/UserInfo';
import './style.css';

export default function Navbar({username, userEmail}) {
  return (
    <nav id="navbar">
      <div id="search-nav">
        <SearchBar />
      </div>
      <div id="user-nav">
        <UserInfo username={username} userEmail={userEmail}/>
      </div>
    </nav>
  )
}

