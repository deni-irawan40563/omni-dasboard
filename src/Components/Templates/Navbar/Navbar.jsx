//Import-React:
import React from 'react';
import PropType from 'prop-types';
//Import-Style:
import './style.css';
//Import-Asset:
import Logo from '../../../Assets/Images/Full Logo Full White.png';
//Import-Components
import SearchBar from '../../Atoms/SearchBar/SearchBar';
import UserInfo from '../../Atoms/UserInfo/UserInfo';

//Main-Components
export default function Navbar({username, userEmail}) {
  return (
    <>
    <nav id="navbar">
      <div id="search-nav">
        <SearchBar />
      </div>
      <div id="user-nav">
        <UserInfo username={username} userEmail={userEmail}/>
      </div>
    </nav>
    </>
  )
}

//Default-Props:
Navbar.defaultProps = {
  username: 'username',
  userEmail: 'user@gmail.com'
}
//Props-Type:
Navbar.PropType = {
  username: PropType.string,
  userEmail: PropType.string
}