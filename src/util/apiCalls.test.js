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
        let mockResponse = {
            "results": [
                {
                    id: 9,
                    palette_name: "Neutrals",
                    project_id: 10,
                    color_1: "#D6B28D",
                    color_2: "#C1A281",
                    color_3: "#E5CCA9",
                    color_4: "#BFA98B",
                    color_5: "#A88F77",
                    timestamps: null
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
            const mockUrl = 'https://palette-of-colors-picker.herokuapp.com/api/v1/palettes'
            getAllPalettes(mockUrl)
            expect(window.fetch).toHaveBeenCalledWith(mockUrl)
          })
      
          it('should return an array of palettes (HAPPY)', () => {
            const mockUrl = 'https://palette-of-colors-picker.herokuapp.com/api/v1/palettes'
      
            getAllPalettes(mockUrl)
            .then(results => expect(results).toEqual(mockResponse))
          })
      
          it('should return an error (SAD)', () => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                ok: false,
                statusText: "Unable to get palettes. Try again later."
              })
            })
      
            const mockUrl = 'http://palette-pick-be.herokuapp.com/api/v1/palette'
      
            expect(getAllPalettes(mockUrl)).rejects.toEqual(Error("Unable to get palettes. Try again later."))
          })
    })

    describe('getProjectById', () => {
        let mockResponse = {
            "results": [
                {
                    id: 9,
                    project_name: "Jessie's House",
                    user_id: 5
                }
            ]
        };

        beforeEach(() => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse)
              });
            });
        });

          it('should fetch with the correct URL (HAPPY)', () => {
            let mockUrl = 'https://palette-of-colors-picker.herokuapp.com/api/v1/projects/9';
            getProjectById(9);
            expect(window.fetch).toHaveBeenCalledWith(mockUrl);
          });

          it.skip('should return a project for a given Id (HAPPY)', async () => {
            const results = await getPaletteById(9);
            expect(results).toEqual(mockResponse);
          });
    });

    describe('getPaletteById', () => {
        let mockResponse = {
            "results": [
                {
                    id: 1,
                    palette_name: "Sailing Away",
                    project_id: 9,
                    color_1: "#17E2B4",
                    color_2: "#143472",
                    color_3: "#060E1E",
                    color_4: "#A3AFC6",
                    color_5: "#E52522",
                    timestamps: null
                }
            ]
        };
      
        beforeEach(() => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse)
              });
            });
        });

          it('should fetch with the correct URL (HAPPY)', () => {
            let mockUrl = 'https://palette-of-colors-picker.herokuapp.com/api/v1/palettes/1';
            getPaletteById(1);
            expect(window.fetch).toHaveBeenCalledWith(mockUrl);
          });

          it.skip('should return a palette for a given Id (HAPPY)', async () => {
            const results = await getPaletteById(1);
            expect(results).toEqual(palettes[0]);
          });
        
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