import ColorCard from '../ColorCard/ColorCard';
import React, { useState } from 'react';
import './ColorContainer.scss';
import PaletteForm from '../PaletteForm/PaletteForm';

const ColorContainer = () => {
    const [initialPalette, setInitialPalette] = useState([
        {palette_id: 1, project_id: '', color: '', locked: false},
        {palette_id: 2, project_id: '', color: '', locked: false},
        {palette_id: 3, project_id: '', color: '', locked: false},
        {palette_id: 4, project_id: '', color: '', locked: false},
        {palette_id: 5, project_id: '', color: '', locked: false}
    ]);     

      const changeColor = () => {
        const randomColor = initialPalette.map(initPalette => {
            if (initPalette.locked === false) {
                initPalette.color = `${Math.floor(Math.random()*16777215).toString(16)}`;
            }
            return initPalette
        })
        setInitialPalette(randomColor)
      }

      const lockColor = (id) => {
          const updatedColors = initialPalette.map(color => {
            if (color.palette_id === id) {
              color.locked = !color.locked
            }
            return color;
          });
          setInitialPalette(updatedColors)
      }
  

      const displayColorCard = initialPalette.map(palette => {
        return (
            <ColorCard 
              {...palette}
              key={palette.palette_id}
              lockColor={lockColor}
            />
        )
      })
 
    return(
        <>
        <section className="section_colorContainer">
            {displayColorCard}
        </section>
        <section className="generate_btn-section">   
        <button
            type='button'
            className='generate_colors-btn'
            onClick={() => changeColor()}>GENERATE COLORS
        </button>
        </section>
        <PaletteForm initialPalette={initialPalette} />
        </>
    )
}

export default ColorContainer;