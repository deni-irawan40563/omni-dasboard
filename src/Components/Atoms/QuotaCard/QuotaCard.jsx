import React from 'react';
import './style.css';

export default function QuotaCard({color}) {
  return (
    <div id="quota-card">
      <p>Call</p>
      <h1 className={color}>4840 second</h1>
    </div>
  )
}
