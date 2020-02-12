//import color card???
import React from 'react';
import './Project.scss';
import trashBin from '../images/rubbish.png';
import Palette from '../Palette/Palette';

const Project = ({projects}) => {
    const displayNames = projects.map(project => {
        return project.project_name
    })

    // We might need to fetch the palettes in project container and pass them down to project so we can display them?

    //we either need to have delete methods in project or project container and pass them as props

    // const displayPalettes = palettes
    // ? palettes.map(palette => (
    //     <Palette {...palette} key={palette.id} />
    //   ))
    // : '';
    
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
        <Palette />
        {/* once we get a method working to pass what needs to be displayed form palettes, we can remove <Pallete /> and just use {displayPalttes} */}
        </div>
    )
}

export default Project;