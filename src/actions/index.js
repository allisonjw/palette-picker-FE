export const setPalettes = (palettes) => ({
    type: 'SET_PALETTES',
    palettes
});

export const addColorPalette = (palette_name, color_1, color_2, color_3, color_4, color_5, project_id) => ({
    type: 'ADD_PALETTE',
    palette: {
        palette_name,
        color_1,
        color_2,
        color_3,
        color_4,
        color_5,
        project_id

    }
});

export const deleteColorPalette = (id) => ({
    type: 'DELETE_PALETTE',
    id
});

export const lockColor = (isLocked) => ({
    type: 'LOCK_COLOR',
    isLocked
});

export const setProjects = (projects) => ({
    type: 'SET_PROJECTS',
    projects
});

export const addProject = (project_name, id) => ({
    type: 'ADD_PROJECT',
    project: {
        project_name,
        id
    }
});

export const deleteProject = (id) => ({
    type: 'DELETE_PROJECT',
    id
});
