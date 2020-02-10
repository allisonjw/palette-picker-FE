//import color card???
import React from 'react';
import './Project.scss'

const Project = ({projects}) => {
    const displayNames = projects.map(project => {
        return project.project_name
    })
    return(
        <div>
            {displayNames}
        </div>
    )
}

export default Project;