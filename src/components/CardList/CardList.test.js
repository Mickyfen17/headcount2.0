import React from 'react';
import CardList from './CardList';
import { shallow } from 'enzyme';
import DistrictRepository from '../../helper.js';
import kinderData from '../../../data/kindergartners_in_full_day_program.js';

describe.skip('testing the App component', () => {
  const district = new DistrictRepository(kinderData);

  it('should have props for four types of state', () => {
    const wrapper = shallow(
      <CardList countyStats={ { test: 'district'} }/>
    )
    // console.log(district);
    // const state = wrapper.state()
    // console.log(state);
    console.log(wrapper.debug());
    // expect(state.countyStats).toEqual({});
    // expect(state.searchText).toEqual('');
    // expect(state.selectedCards).toEqual([]);
    // expect(state.toCompare).toEqual([]);
  })

})