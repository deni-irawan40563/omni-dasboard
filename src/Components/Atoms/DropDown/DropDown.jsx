//Import-React:
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Import-Style:
import './style.css';

//Main-Components:
export default function DropDown({onClick, collapse, title, icon, dropdownTitle, dropdownTitle1, iconRight, link1, link2}) {
  if(collapse){
    return (
      <div id="dropdown">
      <p onClick={onClick}>
        <i id="dropdown-icon" className={icon} onClick={onClick} /> {title}
      </p>
      <i id="dropdown-icon-right" className={iconRight} onClick={onClick} />
      <div id="dropdown-items">
          <Link to={link1}><span className="list-icon" />{dropdownTitle}</Link>
          <Link to={link2}><span className="list-icon" />{dropdownTitle1}</Link>
      </div>
    </div>
    )
  }
  return (
    <div id="dropdown">
      <Link to={link1} onClick={onClick}>
        <i id="dropdown-icon" className={icon} onClick={onClick} /> {title}
      </Link>
      <i id="dropdown-icon-right" className={iconRight} onClick={onClick} />
    </div>
    )
}

//Default-Props
DropDown.defaultProps = {
  collapse: false,
  link1: '#',
  link2: '#'
}
//Props-Type:
DropDown.propTypes = {
  collapse: PropTypes.bool,
  link1: PropTypes.string,
  link2: PropTypes.string,
};