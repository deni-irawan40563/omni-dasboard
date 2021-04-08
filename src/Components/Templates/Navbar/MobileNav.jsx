//Import-React:
import React from 'react';
import PropType from 'prop-types';
//Import-Style:
import './style.css';
//Import-Asset:
import Logo from '../../../Assets/Images/Full Logo Full White.png';
//Import-Components:
import AsideBar from '../AsideBar/AsideBar';

//Main-Components:
export default function MobileNav({onClick, collapse}) {
  if(collapse){
    return <AsideBar />
  }
  return (
    <nav id="mobile-nav">
      <img src={Logo} alt="Omni Logo"/>
      <div id="burger-nav" onClick={onClick}>
        <div className="dot-burger1" />
        <div className="dot-burger2" />
        <div className="dot-burger3" />
      </div>
    </nav>
  )
}

//Default-Props:
MobileNav.defaultProps = {
  onClick: null,
  collapse: false
}
//Props-Type
MobileNav.PropType = {
  onClick: PropType.func,
  collapse: PropType.bool
}