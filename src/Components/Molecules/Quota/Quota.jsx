import React from 'react';
import QuotaCard from '../../Atoms/QuotaCard/QuotaCard';
import './style.css';

export default function Quota() {
  return (
    <div>
      <h1 className="re-quota">Remaining Quota</h1>
      <div id="quota">
        <QuotaCard color="blue" />
        <QuotaCard color="yellow" />
        <QuotaCard color="violet" />
        <QuotaCard color="blue" />
      </div>
    </div>

  )
}
