import React from 'react';
import { useSelector } from 'react-redux';
import './Project.scss';
import trashBin from '../images/rubbish.png';
import Palette from '../Palette/Palette';

const Project = ({name, id, palettes}) => {

  // add removeProject or pass as props from ProjectContainer
  // if created here import apicall, usedispatch and action

  //  const actualPalettes = useSelector(state => state.palettes);

    const displayPalettes = () => {
      // return palettes ? palettes.filter(palette => { //returns true or false;
      //   console.log('palette', palette)
      //   const projectNames = projects.map(project => {
      //     console.log('project', project)
      //     if(palette.project_id === project.id) {
      //       return <Palette {...palette} key={palette.id}/>
      //     }
      //   })
      //   return projectNames;
      //   // console.log('MAP', MAP)
      // }) //map then convert to palette objects
      //   : '';

      return palettes.map(palette => {
        console.log('chicken', palette)
        return <Palette {...palette} key={palette.id} />

      })
      

    } 
      
    return(
      <>
        <h3 className="project_name">{name}}</h3>
          {/* {displayPalettes} */}
            {displayPalettes()}
          
        <img
            className='deleteBtn'
            src={trashBin}
            alt='delete button'
            // onClick={() => removeProject(project_id)}
        ></img>
      </>
    )
};

export default Project;