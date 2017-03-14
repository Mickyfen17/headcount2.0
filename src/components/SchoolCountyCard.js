import React, { Component } from 'react';

const SchoolCountyCard = ({ location, countyStats }) => {
  const mappedStats = Object.keys(countyStats).map((val, i) => {
    return(
      <ul key={i}>
        <li>{ val } : { countyStats[val] }</li>
      </ul>
    )
  })
  return(
    <article>
      <h1>{ location }</h1>
      { mappedStats }
    </article>
  )
}

export default SchoolCountyCard