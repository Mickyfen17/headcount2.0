import React, { Component } from 'react';
import SchoolCountyCard from '../SchoolCountyCard/SchoolCountyCard'
import './CardList.css';


const CardList = ({ countyStats }) => {
  const mappedToCounty = Object.keys(countyStats).map( (val, i) => {
    const { location, data } = countyStats[val]
    return(
      <SchoolCountyCard key={i}
                        location={ location  }
                        countyStats={ data } />
    )
  })
  return(
    <div className='cards-wrapper'>
      { mappedToCounty }
    </div>
  )
}

export default CardList;