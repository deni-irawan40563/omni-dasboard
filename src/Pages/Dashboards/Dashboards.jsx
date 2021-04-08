//Import-React:
import React, { Component } from 'react';
//Import-Style:
import './style.css';
//Import-Components:
import AsideBar from '../../Components/Templates/AsideBar/AsideBar';
import HomeItems from '../../Components/Templates/HomeItems/HomeItems';
import Navbar from '../../Components/Templates/Navbar/Navbar';
import MobileNav from '../../Components/Templates/Navbar/MobileNav';

//Main-Components:
export default class Dashboards extends Component {
  render() {
    return (
      <div id="dashboard">
        <div id="mobile-Nav">
          <MobileNav />
        </div>
        <div id="aside-home">
          <AsideBar />
        </div>
        <div id="main">
          <div id="home-navbar">
            <Navbar username="Deni Irawan.N" userEmail="denykun666@gmail.com"/>
          </div>
          <HomeItems />
        </div>
      </div>
    )
  }
}
