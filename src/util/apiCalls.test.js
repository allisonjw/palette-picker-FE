import { getAllProjects, getProjectById, getPaletteById, getAllPalettes, addPalette, addProject, updateProject, updatePalette, deletePalette, deleteProject } from './apiCalls';

describe('apiCalls.js', () => {

    describe('getAllProjects', () => {
        let mockResponse = {
            "results": [
                {
                    id: 9,
                    project_name: "Jessie's House",
                    user_id: 5
                },
                {
                    id: 10,
                    project_name: "Dream Bath",
                    user_id: 5
                },
                {
                    id: 11,
                    project_name: "Allison's House",
                    user_id: 6
                },
                {
                    id: 12,
                    project_name: "Art Project",
                    user_id: 6
                }
            ]
          }
      
          beforeEach(() => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse)
              });
            });
          });
      
          it('should fetch with correct url', () => {
            const mockUrl = 'https://palette-of-colors-picker.herokuapp.com/api/v1/projects'
      
            getAllProjects(mockUrl)
      
            expect(window.fetch).toHaveBeenCalledWith(mockUrl)
          })
    });

    describe('getAllPalettes', () => {

    });

    describe('getProjectById', () => {

    });

    describe('getPaletteById', () => {

    });
    
    describe('addPalette', () => {

    });
    
    describe('addProject', () => {

    });

    describe('deleteProject', () => {

    });

    describe('deletePalette', () => {

    });

    describe('updateProject', () => {

    });

    describe('updatePalette', () => {

    });

});    