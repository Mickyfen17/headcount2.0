import React from 'react';
import SchoolCountyCard from '../SchoolCountyCard/SchoolCountyCard'
import './CardList.css';


const CardList = ({ countyStats, handleClick, selectedCards }) => {
  const mappedToCounty = Object.keys(countyStats).map( (val, i) => {
    const { location, data } = countyStats[val]
    return(
      <SchoolCountyCard
        key={i}
        location={ location  }
        countyStats={ data }
        handleClick={ handleClick }
        index={ Date.now() }
        selectedCards={ selectedCards }
      />
    )
  })
  return(
    <div className='cards-wrapper'>
      { mappedToCounty }
    </div>
  )
}

CardList.propTypes = {
  countyStats: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
  handleClick: React.PropTypes.func.isRequired,
  selectedCards: React.PropTypes.arrayOf(React.PropTypes.number)
};

export default CardList;