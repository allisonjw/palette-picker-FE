import React from 'react';
import { render } from '@testing-library/react';
import Project from './Project';
import { shallow } from 'enzyme';

describe('Project', () => {
  let wrapper;
  const mockProjects =[{
        "id": 9,
        "project_name": "Jessie's House",
        "user_id": 5
    },
    {
        "id": 10,
        "project_name": "Dream Bath",
        "user_id": 5
    },
    {
        "id": 11,
        "project_name": "Allison's House",
        "user_id": 6    
  }];

  beforeEach(() => {
    wrapper = shallow(<Project projects={mockProjects}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});