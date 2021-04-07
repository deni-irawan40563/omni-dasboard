//Import-React:
import React, { Component } from 'react';
//Import-Style:
import './style.css';
//Import-Components:
import AsideBar from '../../Components/Templates/AsideBar/AsideBar';
import Navbar from '../../Components/Templates/Navbar/Navbar';
import SmsSchdullerItems from '../../Components/Templates/SmsSchdullerItems/SmsSchdullerItems';

//Main-Components:
export default class SmsSchduller extends Component {
  render() {
    return (
      <div id="dashboard">
        <div id="aside-home">
          <AsideBar />
        </div>
        <div id="main">
          <div id="home-navbar">
            <Navbar username="Ifad Ghani" userEmail="denykun666@gmail.com"/>
          </div>
          <SmsSchdullerItems />
        </div>
      </div>
    )
  }
}
