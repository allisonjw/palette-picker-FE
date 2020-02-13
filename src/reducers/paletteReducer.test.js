import { paletteReducer } from './paletteReducer';

describe('paletteReducer', () => {
    it('should return the initial state', () => {
      const expected = [];
  
      const result = paletteReducer(undefined, {});
      expect(result).toEqual(expected);
    });

    it('should return the correct state with action type SET_PALETTES', () => {
        const initialState = [];
        const palettes = [{
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
        }];

        const expected = [{
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
        }];

        const action = {
            type: 'SET_PALETTES',
            palettes
        };
      
        const result = paletteReducer(initialState, action);
        expect(result).toEqual(expected);    
    });

    it('should return the correct state with action type ADD_PALETTE', () => {
        const initialState = [];
        const palette = {
            "id": 9,
            "palette_name": "Neutrals",
            "project_id": 10,
            "color_1": "#D6B28D",
            "color_2": "#C1A281",
            "color_3": "#E5CCA9",
            "color_4": "#BFA98B",
            "color_5": "#A88F77",
        };

        const expected = [palette];

        const action = {
            type: 'ADD_PALETTE',
            palette
        };
      
        const result = paletteReducer(initialState, action);
        expect(result).toEqual(expected);    
    });

    it('should return the correct state with action type REMOVE_PALETTE', () => {
        const initialState = [{
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
        }];

        const expected = [{
            "id": 11,
            "palette_name": "Modern",
            "project_id": 11,
            "color_1": "#AE2D49",
            "color_2": "#21354A",
            "color_3": "#4EB47A",
            "color_4": "#C9CFC8",
            "color_5": "#F6C876",
        }];
        const id = 10;
    
        const action = {
          type: 'DELETE_PALETTE',
          id
        };

        const result = paletteReducer(initialState, action);
        expect(result).toEqual(expected);  
    });

});    