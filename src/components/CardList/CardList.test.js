import React from 'react';
import CardList from './CardList';
import SchoolCountyCard from '../SchoolCountyCard/SchoolCountyCard';
import { shallow } from 'enzyme';
import DistrictRepository from '../../helper.js';
import kinderData from '../../../data/kindergartners_in_full_day_program.js';

describe('testing the CardList component', () => {
  const district = new DistrictRepository(kinderData);

  it('should have a cards wrapper to hold all card rendered to the DOM', () => {
    const wrapper = shallow(
      <CardList
        countyStats={ {} }
        selectedCards={ [0, 1] }
        handleClick={ () => {} }
      />
    )

    expect(wrapper.find('.cards-wrapper')).toHaveLength(1)
  })

  it('should render all 181 cards when original data is passed into CardList', () => {
    const wrapper = shallow(
      <CardList
        countyStats={ district.data }
        selectedCards={ [0, 1] }
        handleClick={ () => {} }
      />
    )

    expect(wrapper.find(SchoolCountyCard)).toHaveLength(181)
  })

})