import React from 'react';
import NoResultsFound from './NoResultsFound';
import { shallow } from 'enzyme';

describe('testing the NoResultsFound component', () => {

    it('should display text to display to user if no results were found following search', () => {
      const wrapper = shallow( <NoResultsFound /> )

      expect(wrapper.find('h2').text()).toEqual('No Results Found')
      expect(wrapper.find('h3').text()).toEqual('Please Search Again')
    })

})