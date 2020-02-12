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

    it.skip('should have a type of ADD_PALETTE', () => {

    });

    it.skip('should have a type of DELETE_PALETTE', () => {

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

    it.skip('should have a type of ADD_PROJECT', () => {

    });

    it.skip('should have a type of DELETE_PROJECT', () => {

    });

});    