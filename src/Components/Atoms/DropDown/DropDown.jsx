//Import-React:
import React from 'react';
import PropTypes from 'prop-types';
//Import-Style:
import './style.css';
//Import-Asset:
// import DropdownIcon from '../../../Assets/Images/list-icon.svg';

//Main-Components:
export default function DropDown({onClick, collapse, title, icon, dropdownTitle, dropdownTitle1, iconRight}) {
  if(collapse){
    return (
      <div id="dropdown">
      <p onClick={onClick}>
        <i id="dropdown-icon" className={icon} onClick={onClick} /> {title}
      </p>
      <i id="dropdown-icon-right" className={iconRight} />
      <div id="dropdown-items">
          <p><span className="list-icon" />{dropdownTitle}</p>
          <p><span className="list-icon" />{dropdownTitle1}</p>
      </div>
    </div>
    )
  }
  return (
    <div id="dropdown">
      <p onClick={onClick}>
        <i id="dropdown-icon" className={icon} onClick={onClick} /> {title}
      </p>
      <i id="dropdown-icon-right" className={iconRight} />
    </div>
    )
}

//Default-Props
DropDown.defaultProps = {
  collapse: false
}
//Props-Type:
DropDown.propTypes = {
  collapse: PropTypes.bool
};