import React from 'react';
import ComparedStats from './ComparedStats';
import { shallow } from 'enzyme';

describe('testing the ComparedStats component', () => {
  const data = [{
    index: 12345,
    location: 'COLORADO',
    statistics: { 2004: 0.27,2005: 0.68,2006: 0.37,2007: 0.895,2008: 0.636,
      2009: 0.48,2010: 0.21,2011: 0.658,2012: 0.965,2013: 0.358,2014: 0.786
    }
  },
  {
    index: 6789,
    location: 'ACADEMY 20',
    statistics: { 2004: 0.24, 2005: 0.278, 2006: 0.337, 2007: 0.395, 2008: 0.536,
      2009: 0.598, 2010: 0.64, 2011: 0.672, 2012: 0.695, 2013: 0.703, 2014: 0.741
    }
  }]
  const partData = [{
    index: 12345,
    location: 'COLORADO',
    statistics: { 2004: 0.27,2005: 0.68,2006: 0.37,2007: 0.895,2008: 0.636,
      2009: 0.48,2010: 0.21,2011: 0.658,2012: 0.965,2013: 0.358,2014: 0.786
    }
  }]

  it('should return null if an empty compared array is ComparedStats', () => {
    const wrapper = shallow(
      <ComparedStats
        cardsToCompare={ [] }
        selectedCards={ [] }
        handleClick={ () => {} }
      />
    )
    expect(wrapper.node).toEqual(null)
  })

  it('should return null if a compared array of one object is passed to ComparedStats', () => {
    const wrapper = shallow(
      <ComparedStats
        cardsToCompare={ partData }
        selectedCards={ [] }
        handleClick={ () => {} }
      />
    )
    expect(wrapper.node).toEqual(null)
  })

  it('should display the data from each card and compared data when the correct data is passed to ComparedStats', () => {
    const wrapper = shallow(
      <ComparedStats
        cardsToCompare={ data }
        selectedCards={ [12345, 6789] }
        handleClick={ () => {} }
      />
    )

    expect(wrapper.find('div.compare-divs')).toHaveLength(3)
  })

  it('should display the compared data of the two school counties which have been passed', () => {
    const wrapper = shallow(
      <ComparedStats
        cardsToCompare={ data }
        selectedCards={ [12345, 6789] }
        handleClick={ () => {} }
      />
    )

    expect(wrapper.find('div.compare-divs').last()
                                           .text())
                                           .toEqual('compared0.768')
  })

})