import * as actions from './index';

describe('actions', () => {

    it('should have a type of SET_PALETTES', () => {
        const palettes = [{}, {}, {}];
        const expectedAction = {
            type: 'SET_PALETTES',
            palettes
        };

    const result = actions.setPalettes(palettes);
    expect(result).toEqual(expectedAction);
    });

    it('should have a type of ADD_PALETTE', () => {
        const palette = 'Beach Paradise';
        const expectedAction = {
            type: 'ADD_PALETTE',
            palette
        };

    const result = actions.addColorPalette(palette);    
    expect(result).toEqual(expectedAction);    
    });

    it('should have a type of DELETE_PALETTE', () => {
        const id = '22';
        const expectedAction = {
            type: 'DELETE_PALETTE',
            id
        };

    const result = actions.deleteColorPalette(id);
    expect(result).toEqual(expectedAction);
    });

    it('should have a type of SET_PROJECTS', () => {
        const projects = [{}, {}, {}];
        const expectedAction = {
            type: 'SET_PROJECTS',
            projects
        };

    const result = actions.setProjects(projects);
    expect(result).toEqual(expectedAction);
    });

    it('should have a type of ADD_PROJECT', () => {
        const project= 'Seahawks Party Colors'
        const expectedAction = {
            type: 'ADD_PROJECT',
            project
        };

    const result = actions.addProject(project);
    expect(result).toEqual(expectedAction);
    });

    it('should have a type of DELETE_PROJECT', () => {
        const id = '9';
        const expectedAction = {
            type: 'DELETE_PROJECT',
            id
        };

    const result = actions.deleteProject(id);
    expect(result).toEqual(expectedAction);
    });
});    