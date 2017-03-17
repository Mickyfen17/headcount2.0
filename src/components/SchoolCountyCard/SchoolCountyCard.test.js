import React from 'react';
import SchoolCountyCard from './SchoolCountyCard';
import { shallow } from 'enzyme';
import DistrictRepository from '../../helper.js';
import kinderData from '../../../data/kindergartners_in_full_day_program.js';

describe('testing the SchoolCountyCard component', () => {
  const district = new DistrictRepository(kinderData);
  const data = {
    data: {
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
    },
    location: "COLORADO"
  }

  it('should have a each card article to hold all county data', () => {
    const wrapper = shallow(
      <SchoolCountyCard
        countyStats={ {} }
        selectedCards={ [0, 1] }
        handleClick={''}
      />
    )

    expect(wrapper.find('.each-card')).toHaveLength(1)
  })

  it('each card article should be able to display a counties header', () => {
    const wrapper = shallow(
      <SchoolCountyCard
        countyStats={ {} }
        selectedCards={ [0, 1] }
        handleClick={''}
      />
    )
    //
    expect(wrapper.find('.card-header')).toHaveLength(1)
  })

})