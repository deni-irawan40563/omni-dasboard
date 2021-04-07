//Import-React:
import React from 'react';
//Import-Style:
import './style.css';

//Main-Components:
export default function SearchBar() {
  return (
    <div class="container">
      <input type="text" class="container__input" />
      <i id="search-icon" class="fas fa-search"></i>
    </div>
  )
}
