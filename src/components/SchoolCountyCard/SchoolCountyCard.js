import React, { Component } from 'react';
import './SchoolCountyCard.css';

const SchoolCountyCard = ({ location, countyStats }) => {
  const mappedStats = Object.keys(countyStats).map((val, i) => {
    return(
        <li className='stat-list' key={i}>{ val } : { countyStats[val] }</li>
    )
  })
  return(
    <article className='each-card'>
      <h1 className='card-header'>{ location }</h1>
      <ul>
        { mappedStats }
      </ul>
    </article>
  )
}

export default SchoolCountyCard