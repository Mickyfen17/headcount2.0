import React from 'react';
import CardsToCompare from './CardsToCompare';
import SchoolCountyCard from '../SchoolCountyCard/SchoolCountyCard';
import ComparedStats from '../ComparedStats/ComparedStats';
import { shallow } from 'enzyme';

describe('testing the CardsToCompare component', () => {
  const data = [{
    index: 1489720931335,
    location: 'COLORADO',
    statistics: {
      2004: 0.24,
      2005: 0.278,
      2006: 0.337,
      2007: 0.395,
      2008: 0.536,
      2009: 0.598,
      2010: 0.64,
      2011: 0.672,
      2012: 0.695,
      2013: 0.703,
      2014: 0.741
    }
  },
  {
    index: 1489720932934,
    location: 'ACADEMY 20',
    statistics: {
      2004: 0.27,
      2005: 0.68,
      2006: 0.37,
      2007: 0.895,
      2008: 0.636,
      2009: 0.48,
      2010: 0.21,
      2011: 0.658,
      2012: 0.965,
      2013: 0.358,
      2014: 0.786
    }
  }]

  it('should have a compare section to hold the cards to be compared', () => {
    const wrapper = shallow(
      <CardsToCompare
          cardsToCompare={ data }
          handleClick={ () => {} }
      />
    )

    expect(wrapper.find('.compare-section')).toHaveLength(1)
  })

  it('should have a ComparedStats component to display the comapred data card', () => {
    const wrapper = shallow(
      <CardsToCompare
          cardsToCompare={ data }
          handleClick={ () => {} }
      />
    )

    expect(wrapper.find(ComparedStats)).toHaveLength(1)
  })

  it('should be able to pass array of two school counties an render to the DOM', () => {
    const wrapper = shallow(
      <CardsToCompare
        cardsToCompare={ data }
        handleClick={ () => {} }
      />
    )
    console.log(wrapper.debug());
    expect(wrapper.find(SchoolCountyCard)).toHaveLength(2)
  })

  it('should hold the contect to be rendered to the DOM within props', () => {
    const wrapper = shallow(
      <CardsToCompare
        cardsToCompare={ data }
        handleClick={ () => {} }
      />
    )
    const countyStats = {'2004': 0.24,'2005': 0.278,'2006': 0.337,'2007': 0.395,
      '2008': 0.536,'2009': 0.598,'2010': 0.64,'2011': 0.672,'2012': 0.695,
      '2013': 0.703,'2014': 0.741 }

    expect(wrapper.find(SchoolCountyCard).first()
                                         .props().location)
                                         .toEqual('COLORADO')
    expect(wrapper.find(SchoolCountyCard).first()
                                         .props().countyStats)
                                         .toEqual(countyStats)
    expect(wrapper.find(SchoolCountyCard).first()
                                         .props().index)
                                         .toEqual(1489720931335)
  })

})