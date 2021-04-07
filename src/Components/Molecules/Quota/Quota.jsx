//Import-React:
import React from 'react';
//Import-Style:
import './style.css';
//Import-Components:
import QuotaCard from '../../Atoms/QuotaCard/QuotaCard';

//Main-Components:
export default function Quota() {
  return (
    <div>
      <h1 className="re-quota">Remaining Quota</h1>
      <div id="quota">
        <QuotaCard color="blue" type="Call" countRemaining="1233 second" />
        <QuotaCard color="yellow" type="SMS" countRemaining="4000 messages" />
        <QuotaCard color="violet" type="Email" countRemaining="74534 mails" />
        <QuotaCard color="blue" type="Whatapps" countRemaining="346 messages" />
      </div>
    </div>

  )
}
