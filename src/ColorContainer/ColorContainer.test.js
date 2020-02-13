import React from 'react';
import { render } from '@testing-library/react';
import ColorContainer from './ColorContainer';
import { shallow } from 'enzyme';

describe('ColorContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ColorContainer />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});