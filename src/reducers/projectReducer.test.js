import { projectReducer } from './projectReducer';

describe('projectReducer', () => {
    it('should return the initial state', () => {
      const expected = [];
  
      const result = projectReducer(undefined, {});
      expect(result).toEqual(expected);
    });

    it('should return the correct state with action type SET_PROJECTS', () => {
        const initialState = [];
        const projects = [{
            "id": 9,
            "project_name": "Jessie's House",
            "user_id": 5
        },
        {
            "id": 10,
            "project_name": "Dream Bath",
            "user_id": 5
        }];

        const expected = [{
            "id": 9,
            "project_name": "Jessie's House",
            "user_id": 5
        },
        {
            "id": 10,
            "project_name": "Dream Bath",
            "user_id": 5
        }];

        const action = {
            type: 'SET_PROJECTS',
            projects
        };
      
        const result = projectReducer(initialState, action);
        expect(result).toEqual(expected);    
    });

    it('should return the correct state with action type ADD_PROJECT', () => {
        const initialState = [];
        const project = {
            "id": 11,
            "project_name": "Allison's House",
            "user_id": 6
        };

        const expected = [project];

        const action = {
            type: 'ADD_PROJECT',
            project
        };
      
        const result = projectReducer(initialState, action);
        expect(result).toEqual(expected);    
    });

    it('should return the correct state with action type REMOVE_PROJECT', () => {
        const initialState = [{
            "id": 9,
            "project_name": "Jessie's House",
            "user_id": 5
        },
        {
            "id": 10,
            "project_name": "Dream Bath",
            "user_id": 5
        }];

        const expected = [{
            "id": 9,
            "project_name": "Jessie's House",
            "user_id": 5
        }];
        const id = 10;
    
        const action = {
          type: 'DELETE_PROJECT',
          id
        };

        const result = projectReducer(initialState, action);
        expect(result).toEqual(expected);  
    });
});    