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
        };
      
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
          });
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
        };
      
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
          });
      
          it('should return an array of palettes (HAPPY)', () => {
            const mockUrl = 'https://palette-of-colors-picker.herokuapp.com/api/v1/palettes'
      
            getAllPalettes(mockUrl)
            .then(results => expect(results).toEqual(mockResponse))
          });
      
          it('should return an error (SAD)', () => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                ok: false,
                statusText: "Unable to get palettes. Try again later."
              })
            });
      
            const mockUrl = 'https://palette-of-colors-picker.herokuapp.com/api/v1/palettes'
      
            expect(getAllPalettes(mockUrl)).rejects.toEqual(Error("Unable to get palettes. Try again later."))
          });
    });

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
            let mockUrl = `https://palette-of-colors-picker.herokuapp.com/api/v1/projects/${9}`;
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
            let mockUrl = `https://palette-of-colors-picker.herokuapp.com/api/v1/palettes/${1}`;
            getPaletteById(1);
            expect(window.fetch).toHaveBeenCalledWith(mockUrl);
          });

          it.skip('should return a palette for a given Id (HAPPY)', async () => {
            const results = await getPaletteById(1);
            expect(results).toEqual(palettes[0]);
          });
        
    });
    
    describe('addPalette', () => {
        let mockResponse = {
            palette_name: "Modern",
            color_1: "#AE2D49",
            color_2: "#21354A",
            color_3: "#4EB47A",
            color_4: "#C9CFC8",
            color_5: "#F6C876"
          };
      
          beforeEach(() => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                ok:true,
                json: () => Promise.resolve(mockResponse)
              })
            });
          });
      
          it('should fetch with the correct arguments', () => {
            const mockUrl = 'https://palette-of-colors-picker.herokuapp.com/api/v1/palettes'
            const mockPalette = {
                palette_name: "Modern",
                color_1: "#AE2D49",
                color_2: "#21354A",
                color_3: "#4EB47A",
                color_4: "#C9CFC8",
                color_5: "#F6C876"
            };

            const expected = [mockUrl, {
              method: 'POST',
              body: JSON.stringify(mockPalette),
              headers: {
                'Content-Type': 'application/json'
              }
            }]
      
            addPalette(mockPalette)
            expect(window.fetch).toHaveBeenCalledWith(...expected)
          });
      
          it('should post a palette (HAPPY)', () => {
            const mockUrl = 'https://palette-of-colors-picker.herokuapp.com/api/v1/palettes'

            addPalette(mockUrl)
            .then(results => expect(results).toEqual(mockResponse))
          });
      
          it('should return an error (SAD)', () => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                ok: false,
                statusText: "Unable to add palette."
              })
            });
      
            const mockUrl = 'https://palette-of-colors-picker.herokuapp.com/api/v1/palettes'
            expect(addPalette(mockUrl)).rejects.toEqual(Error("Unable to add palette."))
          });
    });
    
    describe('addProject', () => {
        let mockResponse = {
            project_name: "Art Project"
          };
      
          beforeEach(() => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                ok:true,
                json: () => Promise.resolve(mockResponse)
              })
            });
          });
      
          it('should fetch with the correct arguments', () => {
            const mockUrl = 'https://palette-of-colors-picker.herokuapp.com/api/v1/projects'
            const mockProject = {
                project_name: "Art Project"
            };

            const expected = [mockUrl, {
              method: 'POST',
              body: JSON.stringify(mockProject),
              headers: {
                'Content-Type': 'application/json'
              }
            }]
      
            addProject(mockProject)
            expect(window.fetch).toHaveBeenCalledWith(...expected)
          });
      
          it('should post a project (HAPPY)', () => {
            const mockUrl = 'https://project-of-colors-picker.herokuapp.com/api/v1/projects'

            addProject(mockUrl)
            .then(results => expect(results).toEqual(mockResponse))
          });
      
          it('should return an error (SAD)', () => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                ok: false,
                statusText: "Unable to add project."
              })
            });
      
            const mockUrl = 'https://project-of-colors-picker.herokuapp.com/api/v1/projects'
            expect(addProject(mockUrl)).rejects.toEqual(Error("Unable to add project."))
          });
    });

    describe('deleteProject', () => {
        beforeEach(() => {
          window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
              ok: true
            })
          })
        });

        it('should fetch with the correct arguments', () => {
          const id = 1
          const expected = [`https://palette-of-colors-picker.herokuapp.com/api/v1/projects/${1}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            }
          }]

        deleteProject(id)
        expect(window.fetch).toHaveBeenCalledWith(...expected)
        });

        it('should return an error (SAD)', () => {
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
              ok: false,
              statusText: "Error"
            })
        });

        const mockUrl = `https://palette-of-colors-picker.herokuapp.com/api/v1/projects/${1}`
        expect(deleteProject(mockUrl)).rejects.toEqual(Error("Error"))
        });
    });

    describe('deletePalette', () => {
        beforeEach(() => {
          window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
              ok: true
            })
          })
        });

        it('should fetch with the correct arguments', () => {
          const id = 1
          const expected = [`https://palette-of-colors-picker.herokuapp.com/api/v1/palettes/${1}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          }]

        deletePalette(id)
        expect(window.fetch).toHaveBeenCalledWith(...expected)
        });

        it('should return an error (SAD)', () => {
          window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
              ok: false,
              statusText: "Error"
            })
        });

        const mockUrl = `https://palette-of-colors-picker.herokuapp.com/api/v1/palettes/${1}`
        expect(deletePalette(mockUrl)).rejects.toEqual(Error("Error"))
        });
    });

    describe('updateProject', () => {
        beforeEach(() => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                ok: true
              })
            })
          });

          it('should fetch with the correct URL and options', () => {
            const mockUrl = `https://palette-of-colors-picker.herokuapp.com/api/v1/projects/${1}`;
            const update = { color_1: '#D6B28D' };
            const options = {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(update)
            };
            updateProject(update, 1);
            expect(window.fetch).toHaveBeenCalledWith(mockUrl, options);
          });
        });  

    describe('updatePalette', () => {
        beforeEach(() => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                ok: true
              })
            })
          });

    });

});    