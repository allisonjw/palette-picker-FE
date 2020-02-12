import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPalette } from '../util/apiCalls';
import { addColorPalette } from '../actions';
import './PaletteForm.scss';
import Project from '../Project/Project';


const PaletteForm = ({initialPalette}) => {
    const [paletteName, setPaletteName] = useState('');
    const [paletteFormInput, setPaletteFormInput] = useState({});
    let [errorMsg, setErrorMsg] = useState('');
    const dispatch = useDispatch();

  console.log('name', paletteName)

  const handleChange = (e) => {
      setPaletteName('')
      setPaletteFormInput(paletteFormInput => ({...paletteFormInput, [e.target.name]: e.target.value}))
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (!paletteName && !Project.name) {
          setErrorMsg = ('please select a project and create a new palette name')
      } else {
    const newPalette = { 
        palette_name: paletteName, 
        color_1: `#${initialPalette[0].color}`, 
        color_2: `#${initialPalette[1].color}`, 
        color_3: `#${initialPalette[2].color}`, 
        color_4: `#${initialPalette[3].color}`, 
        color_5: `#${initialPalette[4].color}`};
        // project_id: '' };
      dispatch(addColorPalette(newPalette));
      addPalette(newPalette)
      setPaletteName('')
    }
  }

    return(
        <form className="palette_form" onSubmit={handleSubmit}> 
            <select className="palette_select">palette # 1</select>
            <input 
                name="name"
                className="palette_input" 
                value={paletteFormInput.name}
                placeholder="Palette Name"
                onChange={(e) => handleChange(e)}/>
            <button 
                onClick={(e) => setPaletteName(e.target.value)}
                className="palette_btn">Submit Palette
            </button>
        </form>
    )
}

export default PaletteForm;

