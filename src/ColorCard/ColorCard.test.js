import React from 'react';
import { render } from '@testing-library/react';
import ColorCard from './ColorCard';
import { shallow } from 'enzyme';

describe('ColorCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ColorCard />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});