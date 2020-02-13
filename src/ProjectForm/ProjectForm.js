import React, { useState} from 'react';
import {useDispatch } from 'react-redux';
import { addNewProject } from '../actions';
import { addProject } from '../util/apiCalls';
import './ProjectForm.scss';
export const ProjectForm = () => {
    const dispatch = useDispatch();
    const [newProjectName, setNewProjectName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProject = { 
            project_name: newProjectName,  
        };
        addProject(newProject)
        dispatch(addNewProject(newProject));
        setNewProjectName('')
    };
    
    return(
        <form className="project_form" onSubmit={(e) => handleSubmit(e)}>
            <input 
                className="project_input"
                placeholder="Enter Project Name"
                value={newProjectName}
                onChange={(e) => setNewProjectName(e.target.value)}/>
            <button 
                className="project_btn">Submit Project
            </button>
        </form>
    )
}
export default ProjectForm;