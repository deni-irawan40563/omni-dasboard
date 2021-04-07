import React from 'react';
import './style.css';

export default function Table({color}) {
  return (
    <div id="table-style">
    <div id="table-style">
      <table id="table">
        <tr id="table-name-container">
          <th id="table-name">Recent BLAST</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th><p><i class="fas fa-sort-amount-up" /> sort</p><p><i class="fas fa-filter" /> filter</p></th>
        </tr>
          <tr id="table-title">
            <th>Id Name</th>
            <th>Type</th>
            <th>Campaign</th>
            <th>Total Blast</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
            <tr className="table-contents">
              <td>MTN_NAMSM</td>
              <td>call</td>
              <td>Reminding Billing 20 September</td>
              <td>12223</td>
              <td className="success">success</td>
              <td>July 15, 2018 4:47 AM</td>
            </tr>
            <tr className="table-contents">
              <td>MTN_NAMSM</td>
              <td>call</td>
              <td>Reminding Billing 20 September</td>
              <td>12223</td>
              <td className="failed">failed</td>
              <td>July 15, 2018 4:47 AM</td>
            </tr>   
      </table>
    </div>
    </div>
  )
}
