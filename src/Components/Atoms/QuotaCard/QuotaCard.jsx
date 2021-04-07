//Import-React:
import React from 'react';
import PropsType from 'prop-types';
//Import-Style:
import './style.css';

//Main-Components:
export default function QuotaCard({color, type, countRemaining}) {
  return (
    <div id="quota-card">
      <p>{type}</p>
      <h1 className={color}>{countRemaining}</h1>
    </div>
  )
}

//Default-Props:
QuotaCard.defaultProps = {
  color: '',
  type: 'type',
  countRemaining: 0
}
//Props-Type:
QuotaCard.PropsType = {
  color: PropsType.string,
  type: PropsType.string,
  countRemaining: PropsType.number
}