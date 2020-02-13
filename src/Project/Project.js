import React from 'react';
import { useSelector } from 'react-redux';
import './Project.scss';
import trashBin from '../images/rubbish.png';
import Palette from '../Palette/Palette';

const Project = ({name, id, palettes}) => {

  // add removeProject or pass as props from ProjectContainer
  // if created here import apicall, usedispatch and action

    const displayPalettes = () => {
      return palettes.map(palette => {
        console.log('chicken', palette)
        return <Palette {...palette} key={palette.id} />
      })
    } 
    return(
      <section className="project-box">
      
        <h3 className="project_name">{name}</h3>
            {displayPalettes()}
        <img
            className='deleteBtn'
            src={trashBin}
            alt='delete button'
            // onClick={() => removeProject(project_id)}
        ></img>
      </section>
    )
};

export default Project;