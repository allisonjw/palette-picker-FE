import React, { useState, useEffect } from 'react';
import './ProjectContainer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from '../util/apiCalls';
import { setProjects } from '../actions';
import Project from '../Project/Project';

export const ProjectContainer = () => {
    const dispatch = useDispatch();
    const [project, setProjects] = useState([]);
    const displayProjects = useSelector(state => console.log('state', state)) //payload. will utilize useEffect with displayProjects
    console.log('displayProjects', displayProjects)

    useEffect(() => {
        const fetchProjects = async () => {
          try {
            const response = await getAllProjects();
            console.log('responseProjects', response)
            // setProjects(response.projects);
         dispatch(setProjects(response));
          } catch(error) {
              console.log(error);
          }
        };
        fetchProjects();
      }, []);

      return(
          <section>
              <Project displayProjects={displayProjects}/>
          </section>
      )
    
    
}

export default ProjectContainer;
