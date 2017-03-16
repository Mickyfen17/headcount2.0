import React, { Component } from 'react';
import CardList from '../components/CardList/CardList'
import './App.css';
import DistrictRepository from '../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

const district = new DistrictRepository(kinderData);

class App extends Component {
  constructor() {
    super()
    this.state = {
      countyStats: {},
      searchText: '',
      selectedCards: [],
      toCompare : []
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState ({
       countyStats: district.data,
     })
  }

  handleSearch(e) {
    this.setState({
      searchText: e.target.value
    }, this.searchCounties)
  }

  searchCounties() {
    this.setState({
      countyStats: district.findAllMatches(this.state.searchText),
    })
  }

  handleClick(index, location, statistics) {
    if(this.state.selectedCards.length >= 2) {
      return
    }
    const compareObj = {
      location,
      statistics,
    }
    this.setState({
      selectedCards: this.state.selectedCards.concat(index),
      toCompare: this.state.toCompare.concat(compareObj),
    })
  }

  render() {
    return (
      <section className='main-section'>
        <h1>Welcome To Headcount 2.0</h1>
        <input
          className='search-input'
          type='text'
          value={ this.state.searchText }
          placeholder='Search School Counties'
          onChange={ e => this.handleSearch(e) }
        />
        <CardList
          { ...this.state }
          handleClick={ this.handleClick }
          />
      </section>
    );
  }
}

export default App;