import React from 'react';
import './ComparedStats.css';
import DistrictRepository from '../../helper.js';
import kinderData from '../../../data/kindergartners_in_full_day_program.js';

const district = new DistrictRepository(kinderData);

const ComparedStats = ({ cardsToCompare }) => {
  if(cardsToCompare.length !== 2) {
    return null
  }
  const locations = cardsToCompare.map(card => card.location)
  const [ firstCounty, secondCounty ] = locations
  const comparedCard = () => {
    if(locations.length !== 2) {
      return
    }
    const compared = district.compareDistrictAverages(firstCounty, secondCounty)
    return(
      Object.keys(compared).map((key, i) => {
        return(
          <div className='compare-divs' key={i}>
            <h3>{key}</h3>
            <h3>{compared[key]}</h3>
          </div>
        )
      })
    )
  }

  return(
    <article className='selected each-card'>
      { comparedCard() }
    </article>
  )
}

ComparedStats.propTypes = {
  cardsToCompare: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default ComparedStats