export const setPalettes = (palettes) => ({
    type: 'SET_PALETTES',
    palettes
});

export const addColorPalette = (palette) => ({
    type: 'ADD_PALETTE',
    palette
});

export const deleteColorPalette = (id) => ({
    type: 'DELETE_PALETTE',
    id
});

export const setProjects = (projects) => ({
    type: 'SET_PROJECTS',
    projects
});

export const addNewProject = (project) => ({
    type: 'ADD_PROJECT',
    project
});

export const deleteSelectedProject = (id) => ({
    type: 'DELETE_PROJECT',
    id
});
