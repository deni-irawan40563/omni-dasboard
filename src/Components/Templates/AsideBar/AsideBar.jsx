//Import-React:
import React, {useState} from 'react';
//Import-Style:
import './style.css';
//Import-Asset:
import Logo from '../../../Assets/Images/Full Logo Full White.png';
import DropDown from '../../Atoms/DropDown/DropDown';

//Main-Components:
export default function AsideBar({onClick}) {
  const [collapse, setCollapse] = useState(false)
  return (
    <>
      <aside id="aside-bar">
        <h1 id="closeButton" onClick={onClick}>X</h1>
        <img src={Logo} alt="logo" id="logo"/>
        <div id="sidebar-link">
          <DropDown title="Home" icon="fas fa-home" link1="/dashboard"/>
          <DropDown
            title="SMS"
            icon="far fa-comment-alt"
            iconRight={collapse ? "fas fa-chevron-down" : "fas fa-chevron-up"}
            dropdownTitle="SMS Scheduler"
            dropdownTitle1="Broadcast"
            collapse={collapse}
            onClick={()=>setCollapse(!collapse)}
            link1="/smsschduller"
            link2="/smsschduller"
          />
        </div>
      </aside>
    </>
  )
}
