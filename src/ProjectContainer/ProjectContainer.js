import Project from '../Project/Project';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProjects, deleteProject } from '../actions';
import { getAllProjects } from '../util/apiCalls';
import './ProjectContainer.scss';

export const ProjectContainer = () => {
    const dispatch = useDispatch();
    const [project, setAllProjects] = useState([]);
    const projects = useSelector(state => state.projects)

        const fetchProjects = async () => {
          try {
            const response = await getAllProjects();
            setAllProjects(response.projects);
            dispatch(setProjects(response));
          } catch(error) {
              console.log(error);
          }
        };
      useEffect(() => {
        fetchProjects();
      }, []);

      return(
        <div className="project-container-main">
          <section className="section_projectContainer-project">
              <Project projects={projects}/>
          </section>
          </div>
      )
    
    
}

export default ProjectContainer;
