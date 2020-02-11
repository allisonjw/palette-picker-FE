import React from 'react';
import usePaletteForm from '../CustomHooks/CustomHooks.js';
import './PaletteForm.scss';



const PaletteForm = () => {
    const {input, handleChange, handleSubmit} = usePaletteForm();
    return(
        <form className="palette_form" onSubmit={handleSubmit}> 
            <select className="palette_select">project # 1</select>
            <input className="palette_input" onChange={handleChange} value={input}/>
            <button className="palette_btn">Submit Palette</button>
        </form>
    )
}

export default PaletteForm;
