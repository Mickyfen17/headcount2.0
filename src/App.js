import React, { Component } from 'react';
import CardList from './components/CardList'
import './App.css';
import DistrictRepository from './helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      countyStats: {}
    }
  }

  componentDidMount() {
    const district = new DistrictRepository(kinderData);
    this.setState ({
       countyStats: district.data,
     })
  }
  
  render() {
    return (
      <div>
        Welcome To Headcount 2.0
        <CardList { ...this.state }/>
      </div>
    );
  }
}

export default App;