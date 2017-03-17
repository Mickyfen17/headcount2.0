import React from 'react';
import App from './App';
import CardsToCompare from '../components/CardsToCompare/CardsToCompare';
import CardList from '../components/CardList/CardList';
import { shallow } from 'enzyme';
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('testing the App component', () => {

  it('should have props for four types of state', () => {
    const wrapper = shallow( <App /> )
    const state = wrapper.state()

    expect(state.countyStats).toEqual({});
    expect(state.searchText).toEqual('');
    expect(state.selectedCards).toEqual([]);
    expect(state.toCompare).toEqual([]);
  })

  it('should contain an input field + CardsToCompare & CardList components', () => {
    const wrapper = shallow( <App /> )

    expect(wrapper.find('.search-input')).toHaveLength(1);
    expect(wrapper.find(CardsToCompare)).toHaveLength(1);
    expect(wrapper.find(CardList)).toHaveLength(1);
  })

  it('should be able to enter text into the input field and chnage state of searchText', () => {
    const wrapper = shallow( <App /> )
    let state = wrapper.state();
    const inputField = wrapper.find('.search-input');

    expect(state.searchText).toEqual('');

    inputField.simulate('change', { target: { value: 'Colorado' } });
    state = wrapper.state();

    expect(state.searchText).toEqual('Colorado');
  });

  

})
