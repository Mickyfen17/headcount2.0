import React from 'react';
import { shallow } from 'enzyme';
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe.skip('Visual Layer iteration 2', () => {
  const district = new DistrictRepository(kinderData);

  it('testing SchoolCard', () => {
    const wrapper = shallow(<SchoolCard />)
    console.log(wrapper.debug());
  })
})