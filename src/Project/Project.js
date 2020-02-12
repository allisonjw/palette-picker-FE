import React from 'react';
import { useSelector } from 'react-redux';
import './Project.scss';
import trashBin from '../images/rubbish.png';
import Palette from '../Palette/Palette';

const Project = ({projects}) => {

  // add removeProject or pass as props from ProjectContainer
  // if created here import apicall, usedispatch and action

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
      <>
        <h3 className="project_name">{displayNames}</h3>
          {displayPalettes}
        <img
            className='deleteBtn'
            src={trashBin}
            alt='delete button'
            // onClick={() => removeProject(project_id)}
        />
      </>
    )
};

export default Project;