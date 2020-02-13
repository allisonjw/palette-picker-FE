import React, {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPalette } from '../util/apiCalls';
import { addColorPalette } from '../actions';
import './PaletteForm.scss';

const PaletteForm = ({initialPalette}) => {
    const dispatch = useDispatch();
    const [paletteName, setPaletteName] = useState('');
    const [currentProject, setCurrentProject] = useState('1');
    const displayProjects = useSelector(state => state.projects)

    const changeCurrent = event => {
      let option = event.target.value;
      setCurrentProject(option);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPalette = { 
            palette_name: paletteName, 
            color_1: `#${initialPalette[0].color}`, 
            color_2: `#${initialPalette[1].color}`, 
            color_3: `#${initialPalette[2].color}`, 
            color_4: `#${initialPalette[3].color}`, 
            color_5: `#${initialPalette[4].color}`,
            // project_id: currentProject 
        };
        addPalette(newPalette)
        dispatch(addColorPalette(newPalette));
        setPaletteName('')
    };

    return(
        <>
        <form className="palette_form"> 
            <select className="palette_select" value={currentProject} onChange={changeCurrent}>
                <option selected value="">Select a Project</option>
              {displayProjects.map(project => {
                  return (
                    <option className="palette_option" id={project.id} value={project.project_name}>
                        {project.project_name}
                    </option>
                  )
              })}
            </select>
            <input 
                id="input_palette"
                className="palette_input" 
                value={paletteName}
                placeholder="Palette Name"
                onChange={(e) => setPaletteName(e.target.value)} />
            <button
                onClick={handleSubmit}
                className="palette_btn">Submit Palette</button>
        </form>
        </>
    )
}

export default PaletteForm;
