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
          console.log('lockcolor:', updatedColors)
          setInitialPalette(updatedColors)
      }
      
    //   const generateRandomColor = () => {
    //       return Math.floor(Math.random()*16777215).toString(16);
    //   }

      const displayColorCard = initialPalette.map(palette => {
        return (
            <ColorCard 
              {...palette}
              key={palette.palette_id}
              lockColor={lockColor}
            //   changeColor={changeColor}
            />
        )
      })

      
    return(
        <>
        <section className="section_colorContainer">
            {displayColorCard}
            {/* <ColorCard 
                // onClick={reply_click(id)}
                color={initialPalette[0].color} 
                initialPalette={initialPalette} 
                locked={initialPalette[0].locked} 
                id={initialPalette[0].palette_id}
                lockColor={lockColor}/>
            <ColorCard 
                color={initialPalette[1].color} 
                initialPalette={initialPalette} 
                locked={initialPalette[1].locked}
                id={initialPalette[1].palette_id} 
                lockColor={lockColor}/>
            <ColorCard 
                color={initialPalette[2].color} 
                initialPalette={initialPalette} 
                locked={initialPalette[2].locked} 
                id={initialPalette[2].palette_id}
                lockColor={lockColor}/>
            <ColorCard 
                color={initialPalette[3].color} 
                initialPalette={initialPalette} 
                locked={initialPalette[3].locked} 
                id={initialPalette[3].palette_id}
                lockColor={lockColor}/>
            <ColorCard 
                color={initialPalette[4].color} 
                initialPalette={initialPalette} 
                locked={initialPalette[4].locked}
                id={initialPalette[4].palette_id} 
                lockColor={lockColor}/> */}
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