import React, { Component } from 'react'
import Card from '../../Components/Atoms/Card/Card'
import Table from '../../Components/Atoms/Table/Table'
import Quota from '../../Components/Molecules/Quota/Quota'
import AsideBar from '../../Components/Templates/AsideBar/AsideBar'
import Navbar from '../../Components/Templates/Navbar/Navbar'
import './style.css'
export default class Dashboards extends Component {
  render() {
    return (
      <div id="dashboard">
        <div id="aside-home">
          <AsideBar />
        </div>
        <div id="main">
          <Navbar username="Deni Irawan.N" userEmail="denykun666@gmail.com"/>
          <Card />
          <Quota />
          <Table />
        </div>
      </div>
    )
  }
}
