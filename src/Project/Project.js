import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProject } from '../util/apiCalls';
import { deleteSelectedProject } from '../actions';
import './Project.scss';
import trashBin from '../images/rubbish.png';
import Palette from '../Palette/Palette';

const Project = ({name, id, palettes}) => {
    const dispatch = useDispatch();

    const removeProject = async (id) => {
      await deleteProject(id);
      dispatch(deleteSelectedProject(id));
    };

    const displayPalettes = () => {
      return palettes.map(palette => {
        return <Palette {...palette} key={palette.id} />
      })
    };

    return(
      <section className="project-box">
        <h3 className="project_name">{name}</h3>
        <img
            className='deleteBtn'
            src={trashBin}
            alt='delete button'
            onClick={() => removeProject(id)}
            ></img>
            {displayPalettes()}
      </section>
    )
};

export default Project;