import React from 'react';
import { render } from '@testing-library/react';
import ProjectContainer from './ProjectContainer';
import { shallow } from 'enzyme';
import { getAllProjects, getAllPalettes } from '../util/apiCalls';

jest.mock('../util/apiCalls');

jest.mock("react-redux", () => ({
  useDispatch: () => [{}],
  useSelector: () => ({ projects : [{}, {}] })
}));

describe('ProjectContainer', () => {
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

  let mockPalettes = [{
        "id": 9,
        "palette_name": "Neutrals",
        "project_id": 10,
        "color_1": "#D6B28D",
        "color_2": "#C1A281",
        "color_3": "#E5CCA9",
        "color_4": "#BFA98B",
        "color_5": "#A88F77",
    },
    {
        "id": 10,
        "palette_name": "Sailing Away",
        "project_id": 9,
        "color_1": "#17E2B4",
        "color_2": "#143472",
        "color_3": "#060E1E",
        "color_4": "#A3AFC6",
        "color_5": "#E52522",
    },
    {
        "id": 11,
        "palette_name": "Modern",
        "project_id": 11,
        "color_1": "#AE2D49",
        "color_2": "#21354A",
        "color_3": "#4EB47A",
        "color_4": "#C9CFC8",
        "color_5": "#F6C876",
    },
    {
        "id": 12,
        "palette_name": "Mountain Dreams",
        "project_id": 12,
        "color_1": "#C6CDB7",
        "color_2": "#ECB78A",
        "color_3": "#5A7673",
        "color_4": "#BBB493",
        "color_5": "#96B2B4",
    },
    {
        "id": 24,
        "palette_name": "Murphy's",
        "project_id": null,
        "color_1": "#4afb62",
        "color_2": "#431960",
        "color_3": "#901066",
        "color_4": "#9ab3b9",
        "color_5": "#9cd06e",
    }];

  beforeEach(() => {
    wrapper = shallow(<ProjectContainer projects={mockProjects} palettes={mockPalettes}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});