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
      selectedCards: []
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

  handleClick(index) {
    if(this.state.selectedCards.length >= 2) {
      return
    }
    this.setState({
      selectedCards: this.state.selectedCards.concat(index),
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