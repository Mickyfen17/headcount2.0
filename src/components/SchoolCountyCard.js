import React, { Component } from 'react';

const SchoolCountyCard = ({ location, countyStats }) => {
  const mappedStats = Object.keys(countyStats).map((val, i) => {
    const eachStat = countyStats[val];
    return(
      <div key={i}>
        <span>{ eachStat.TimeFrame }</span>
        <span>  --  </span>
        <span>{ eachStat.Data }</span>
      </div>
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