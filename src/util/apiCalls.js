const baseUrl = 'https://palette-of-colors-picker.herokuapp.com/api/v1';

export const getProjects = async () => {
    const response = await fetch(`${baseUrl}/projects`)
    if (!response.ok) {
      throw Error('Unable to get projects. Try again later.')
    }
    const projects = await response.json();
    // console.log(projects)
    return projects;
};

export const getProjectById = async () => {

};

export const addProject = async () => {

};

export const updateProject = async () => {

};

export const deleteProject = async () => {

};

export const getPalettes = async () => {
    const response = await fetch(`${baseUrl}/palettes`)
    if (!response.ok) {
      throw Error('Unable to get palettes. Try again later.')
    }
    const palettes = await response.json();
    return palettes;
};
console.log(getPalettes)

export const getPaletteById = async () => {

};

export const addPalette = async () => {

};

export const updatePalette = async () => {

};

export const deletePalette = async () => {

};
  
  