import React from 'react';
import SchoolCountyCard from './SchoolCountyCard';
import { shallow } from 'enzyme';
import DistrictRepository from '../../helper.js';
import kinderData from '../../../data/kindergartners_in_full_day_program.js';

describe('testing the SchoolCountyCard component', () => {
  const district = new DistrictRepository(kinderData);
  const data = { 2004: 0.24, 2005: 0.278, 2006: 0.337, 2007: 0.395, 2008: 0.536,
    2009: 0.598, 2010: 0.64, 2011: 0.672, 2012: 0.695, 2013: 0.703, 2014: 0.741
  }

  it('should have a each card article to hold all county data', () => {
    const wrapper = shallow(
      <SchoolCountyCard
        countyStats={ {} }
        selectedCards={ [0, 1] }
        handleClick={ () => {} }
      />
    )

    expect(wrapper.find('.each-card')).toHaveLength(1)
  })

  it('each card article should be able to display a counties header', () => {
    const wrapper = shallow(
      <SchoolCountyCard
        countyStats={ {} }
        selectedCards={ [0, 1] }
        handleClick={ () => {} }
      />
    )

    expect(wrapper.find('.card-header')).toHaveLength(1)
  })

  it('should display a card when data is passed to the component', () => {
    const wrapper = shallow(
      <SchoolCountyCard
        countyStats={ data }
        location={'COLORADO'}
        selectedCards={ [0, 1] }
        handleClick={ () => {} }
      />
    )

    expect(wrapper.find('.card-header').text()).toEqual('COLORADO')
    expect(wrapper.find('li')).toHaveLength(11)
    expect(wrapper.find('li').first()
                             .text())
                             .toEqual('2004 : 0.24')
  })

  it('should have a class of negative if data is less than 0.5', () => {
    const wrapper = shallow(
      <SchoolCountyCard
        countyStats={ data }
        location={'COLORADO'}
        selectedCards={ [0, 1] }
        handleClick={ () => {} }
      />
    )

    expect(wrapper.find('li').first()
                             .text())
                             .toEqual('2004 : 0.24')
    expect(wrapper.find('li').first()
                             .props()
                             .className)
                             .toEqual('negative stat-list')
  })

  it('should have a class of positive if data is greater than 0.5', () => {
    const wrapper = shallow(
      <SchoolCountyCard
        countyStats={ data }
        location={'COLORADO'}
        selectedCards={ [0, 1] }
        handleClick={ () => {} }
      />
    )

    expect(wrapper.find('li').last()
                             .text())
                             .toEqual('2014 : 0.741')
    expect(wrapper.find('li').last()
                             .props()
                             .className)
                             .toEqual('positive stat-list')
  })

  it('should have a class of selected if the card index is within the selected array', () => {
    const wrapper = shallow(
      <SchoolCountyCard
        countyStats={ data }
        location={'COLORADO'}
        selectedCards={ [1234, 4567] }
        handleClick={ () => {} }
        index={ 1234 }
      />
    )

    expect(wrapper.find('.each-card').props()
                                     .className)
                                     .toEqual('selected each-card')
  })

  it('should not have a class of selected if the card index does not exist in the selected array', () => {
    const wrapper = shallow(
      <SchoolCountyCard
        countyStats={ data }
        location={'COLORADO'}
        selectedCards={ [1234, 4567] }
        handleClick={ () => {} }
        index={ 890 }
      />
    )

    expect(wrapper.find('.each-card').props()
                                     .className)
                                     .toEqual('each-card')
  })

})