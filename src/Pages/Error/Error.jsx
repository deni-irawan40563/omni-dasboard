//Import-React:
import React, { Component } from 'react';
//Import-Style:
import './style.css';

//Main-Components:
export default class Error extends Component {
  alett = () => {
    alert('hello')
  }
  render() {
    return (
      <div id="error-404">
        <h1>404 NOT FOUND</h1>
        <h2>Maaf Kayaknya Pagenya Belum Di Buat deh</h2>
      </div>
    )
  }
}
