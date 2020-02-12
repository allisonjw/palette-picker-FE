import ColorCard from '../ColorCard/ColorCard';
import React, { useState } from 'react';
import './ColorContainer.scss';

const ColorContainer = () => {
    const [initialPalette, setInitialPalette] = useState([
        {palette_id: 1, color: '#CA58AD', locked: false},
        {palette_id: 2, color: '#40F8A5', locked: false},
        {palette_id: 3, color: '#7D06F0', locked: false},
        {palette_id: 4, color: '#A545F5', locked: false},
        {palette_id: 5, color: '#341ADB', locked: false}
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
        </>
    )
}

export default ColorContainer;