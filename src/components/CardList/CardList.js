import React, { Component } from 'react';
import SchoolCountyCard from '../SchoolCountyCard/SchoolCountyCard'
import './CardList.css';


const CardList = ({ countyStats }) => {
  const mappedToCounty = Object.keys(countyStats).map( (val, i) => {
    return(
      <SchoolCountyCard key={i}
                        location={ val }
                        countyStats={ countyStats[val].data } />
    )
  })
  return(
    <div className='cards-wrapper'>
      { mappedToCounty }
    </div>
  )
}

export default CardList;