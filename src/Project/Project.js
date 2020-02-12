//import color card???
import React from 'react';
import './Project.scss'
import trashBin from '../images/rubbish.png'

const Project = ({projects}) => {
    const displayNames = projects.map(project => {
        return project.project_name
    })
    return(
        <div>
        <section className="section_projects">
            <h3 className="project_name">{displayNames}</h3>
        </section>
          <img
            className='deleteBtn'
            src={trashBin}
            alt='delete button'
            // onClick={() => removeProject(project_id)}
          />
        {/* {displayPalettes} */}
        </div>
    )
}

export default Project;