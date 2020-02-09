const baseUrl = 'https://palette-of-colors-picker.herokuapp.com/api/v1';

export const getAllProjects = async () => {
    const response = await fetch(`${baseUrl}/projects`)
    if (!response.ok) {
      throw Error('Unable to get projects. Try again later.')
    }
    const projects = await response.json();
    return projects;
};

export const getProjectById = async (id) => {
    const response = await fetch(`${baseUrl}/projects/${id}`);
    const data = response.json();
    return data;
};

export const addProject = async (project_name) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        project_name
      }),
      headers: {
        'content-type': 'application/json'
      }
    };
    const response = await fetch(`${baseUrl}/projects`, options);
    if (!response.ok && response.status !== 422) {
      throw Error('Unable to add project.')
    };
    const id = await response.json();
    return id;
};

export const updateProject = async () => {

};

export const deleteProject = async () => {

};

export const getAllPalettes = async () => {
    const response = await fetch(`${baseUrl}/palettes`)
    if (!response.ok) {
      throw Error('Unable to get palettes. Try again later.')
    }
    const palettes = await response.json();
    return palettes;
};

export const getPaletteById = async (id) => {
    const response = await fetch(`${baseUrl}/palettes/${id}`);
    const data = response.json();
    return data;
};

export const addPalette = async (palette) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        palette
      }),
      headers: {
        'content-type': 'application/json'
      }
    };
    const response = await fetch(`${baseUrl}/palettes`, options);
    if (!response.ok && response.status !== 422) {
      throw Error('Unable to add palette.')
    };
    const addedPalette = await response.json();
    return addedPalette;
};

export const updatePalette = async () => {

};

export const deletePalette = async () => {

};
  
  