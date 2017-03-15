import React, { Component } from 'react';
import classNames from 'classnames';
import './SchoolCountyCard.css';

const SchoolCountyCard = ({ location, countyStats }) => {
  const mappedStats = Object.keys(countyStats).map((val, i) => {
    const liClass = classNames({
                                 'negative' : countyStats[val] <= 0.5,
                                 'positive' : countyStats[val] > 0.5,
                                 'stat-list': true
                               })
    return(
        <li className={ liClass } key={i}>{ val } : { countyStats[val] }</li>
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