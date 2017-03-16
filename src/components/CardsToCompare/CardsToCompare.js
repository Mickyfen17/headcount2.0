import React, { Component } from 'react';
import SchoolCountyCard from '../SchoolCountyCard/SchoolCountyCard'
import './CardsToCompare.css';

const CardsToCompare = ({ cardsToCompare, selectedCards, handleClick }) => {
  if(!cardsToCompare.length) {
    return null
  }
  const mappedToCompare = cardsToCompare.map(val => {
    const { index, location, statistics } = val
    return(
      <SchoolCountyCard
        key={ index }
        location={ location }
        countyStats={ statistics }
        handleClick={ handleClick }
        index={ index }
        selectedCards={ selectedCards }
      />
    )
  })
  return (
    <section className='compare-section'>
      { mappedToCompare }
    </section>
  )
}

export default CardsToCompare;