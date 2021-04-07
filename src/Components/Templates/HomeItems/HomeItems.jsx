//Import-React:
import React from 'react';
//Import-Style:
import './style.css';
//Import-Components:
import Card from '../../Atoms/Card/Card';
import Table from '../../Atoms/Table/Table';
import Quota from '../../Molecules/Quota/Quota';

//Main-Components:
export default function HomeItems() {
  return (
    <>
      <Card />
      <Quota />
      <Table />
    </>
  )
}
