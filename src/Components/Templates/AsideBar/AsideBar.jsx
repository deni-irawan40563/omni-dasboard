//Import-React:
import React, { Component } from 'react'
//Import-Style:
import './style.css';
//Import-Asset:
import Logo from '../../../Assets/Images/Full Logo Full White.png';
import DropDown from '../../Atoms/DropDown/DropDown';

//Main-Components:
export default class AsideBar extends Component {
  state = {
    collapse: true
  }
  dropdownHandle = () => {
    this.setState({
      collapse: !this.state.collapse
    })
  }
  render() {
    return (
      <>
        <aside id="aside-bar">
          <img src={Logo} alt="logo" id="logo"/>
          <div id="sidebar-link">
            <DropDown title="Home" icon="fas fa-home"/>
            <DropDown
              title="SMS"
              icon="far fa-comment-alt"
              iconRight={this.state.collapse ? "fas fa-chevron-down" : "fas fa-chevron-up"}
              dropdownTitle="SMS Scheduler"
              dropdownTitle1="Broadcast"
              collapse={this.state.collapse}
              onClick={this.dropdownHandle}
            />
          </div>
        </aside>
      </>
    )
  }
}

