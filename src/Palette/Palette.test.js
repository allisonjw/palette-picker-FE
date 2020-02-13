import React from 'react';
import { render } from '@testing-library/react';
import Palette from './Palette';
import { shallow } from 'enzyme';

describe('Palette', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Palette />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});