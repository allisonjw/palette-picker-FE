import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProject } from '../util/apiCalls';
import { deleteSelectedProject } from '../actions';
import './Project.scss';
import trashBin from '../images/rubbish.png';
import Palette from '../Palette/Palette';

const Project = ({name, id, palettes}) => {
    const dispatch = useDispatch();

    console.log('pro', id)

    // const remv = async (e) => {
    //   e.preventDefault();
    //   const newProject = { 
    //       project_name: newProjectName,  
    //   };
    //   addProject(newProject)
    //   dispatch(addNewProject(newProject));
    //   setNewProjectName('')

    // const removeProject = async () => {
    //   try {
    //     const newProjects = projects.filter(prj => prj.id !== project.id);
    //     setProjects(newProjects);
    //     await deleteProject(project.id);
    //   }
    //   catch (error) {
    //     console.log(error);
    //   }
    // };

    const removeProject = async () => {
      const body = {
        id: id
      }
      dispatch(deleteSelectedProject(id));
      deleteProject('projects', 'DELETE', body);
    };

    const displayPalettes = () => {
      return palettes.map(palette => {
        return <Palette {...palette} key={palette.id} />
      })
    } 
    return(
      <>
        <h3 className="project_name">{name}</h3>
            {displayPalettes()}
        <img
            className='deleteBtn'
            src={trashBin}
            alt='delete button'
            onClick={() => removeProject(id)}
        ></img>
      </>
    )
};

export default Project;