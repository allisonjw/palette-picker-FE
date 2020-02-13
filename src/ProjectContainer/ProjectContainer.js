import Project from '../Project/Project';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProjects, setPalettes, deleteProject } from '../actions';
import { getAllProjects, getAllPalettes } from '../util/apiCalls';
import './ProjectContainer.scss';

export const ProjectContainer = () => {
    const dispatch = useDispatch();
    const [project, setAllProjects] = useState([]);
    const [palette, setAllPalettes] = useState([]);
    const projects = useSelector(state => state.projects)
    const palettes = useSelector(state => state.palettes)

        const fetchProjects = async () => {
          try {
            const response = await getAllProjects();
            setAllProjects(response.projects);
            dispatch(setProjects(response));
          } catch(error) {
              console.log(error);
          }
        };

        const fetchPalettes = async () => {
          try {
            const response = await getAllPalettes();
            setAllPalettes(response.palettes);
            dispatch(setPalettes(response));
          } catch(error) {
              console.log(error);
          }
        };

      useEffect(() => {
        fetchProjects();
        fetchPalettes();
      }, []);


 const generateProject = () => {
   return projects.map(project => {
     const relevantPalettes = palettes.filter(palette => {
       return palette.project_id === project.id
     })
     return(
       <Project 
        name={project.project_name} 
        key={project.id} 
        id={project.id} 
        palettes={relevantPalettes}/>
     )
   })
 }     
      return(
        <div className="project-container-main">
          <section className="section_projectContainer-project">
              {/* <Project projects={projects}/> */}
              {generateProject()}
          </section>
          </div>
      ) 
};

export default ProjectContainer;
