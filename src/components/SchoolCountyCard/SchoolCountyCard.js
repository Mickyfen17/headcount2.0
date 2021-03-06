import React from 'react';
import classNames from 'classnames';
import './SchoolCountyCard.css';

const SchoolCountyCard = ({ location, countyStats, handleClick, index, selectedCards }) => {
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
  const cardClass = classNames({
                                'selected' : selectedCards.includes(index),
                                'each-card' : true
                              })
  return(
    <article
      className={cardClass}
      onClick={ () => handleClick(index, location, countyStats) }>
      <h1 className='card-header'>{ location }</h1>
      <ul>
        { mappedStats }
      </ul>
    </article>
  )
}

SchoolCountyCard.propTypes = {
  location: React.PropTypes.string,
  countyStats: React.PropTypes.object,
  handleClick: React.PropTypes.func.isRequired,
  index: React.PropTypes.number,
  selectedCards: React.PropTypes.arrayOf(React.PropTypes.number)
};

export default SchoolCountyCard