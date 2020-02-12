import React from 'react';
import { useSelector } from 'react-redux';
import './Project.scss';
import trashBin from '../images/rubbish.png';
import Palette from '../Palette/Palette';

const Project = ({projects}) => {
   const palettes = useSelector(state => state.palettes)

    const displayPalettes = palettes
      ? 
      palettes.map(palette => (
      <Palette {...palette} key={palette.id} />))
      : '';

    const displayNames = projects.map(project => {
      return project.project_name
    });
    
    return(
        <div>
        <section className="section_projects">
            <h3 className="project_name">{displayNames}</h3>
        {displayPalettes}
        </section>
          <img
            className='deleteBtn'
            src={trashBin}
            alt='delete button'
            // onClick={() => removeProject(project_id)}
          />
        </div>
    )
};

export default Project;