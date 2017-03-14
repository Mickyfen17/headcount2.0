import React, { Component } from 'react';
import SchoolCountyCard from './SchoolCountyCard'

const CardList = ({ countyStats }) => {
  const mappedToCounty = Object.keys(countyStats).map( (val, i) => {
    return(
      <SchoolCountyCard key={i}
                        location={ val }
                        countyStats={ countyStats[val] }/>
    )
  })
  return(
    <div>
      { mappedToCounty }
    </div>
  )
}

export default CardList;