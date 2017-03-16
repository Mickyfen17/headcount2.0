import React, { Component } from 'react';
import CardList from '../components/CardList/CardList'
import CardsToCompare from '../components/CardsToCompare/CardsToCompare'
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


  searchCounties() {
    this.setState({
      countyStats: district.findAllMatches(this.state.searchText),
    })
  }

  handleClick(index, location, statistics) {
    if(this.state.selectedCards.length >= 2 || this.state.selectedCards.includes(index)) {
      this.removeFromCompare(index)
      return
    }
    const compareObj = {
      index,
      location,
      statistics,
    }
    this.setState({
      selectedCards: this.state.selectedCards.concat(index),
      toCompare: this.state.toCompare.concat(compareObj),
    })
  }

  removeFromCompare(index) {
    this.setState({
      selectedCards: this.state.selectedCards.filter((val, i) => val !== index),
      toCompare: this.state.toCompare.filter( county => county.index !== index)
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
        <CardsToCompare
          cardsToCompare={ this.state.toCompare }
          selectedCards={ this.state.selectedCards }
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