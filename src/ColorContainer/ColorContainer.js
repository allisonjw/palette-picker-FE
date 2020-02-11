import ColorCard from '../ColorCard/ColorCard';
import { addPalette, deletePalette } from '../util/apiCalls';
import { deleteColorPalette } from '../actions';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import './ColorContainer.scss';

const ColorContainer = () => {
    const dispatch = useDispatch()
    const [palette, setPalette] = useState([
        {palette_id: 1, color: '', locked: false},
        {palette_id: 2, color: '', locked: false},
        {palette_id: 3, color: '', locked: false},
        {palette_id: 4, color: '', locked: false},
        {palette_id: 5, color: '', locked: false}
      ]) 

    const generateRandomColor = () => {
        setPalette([
            {palette_id: 1, color: Math.floor(Math.random()*16777215).toString(16), locked: false},
            {palette_id: 2, color: Math.floor(Math.random()*16777215).toString(16), locked: false},
            {palette_id: 3, color: Math.floor(Math.random()*16777215).toString(16), locked: false},
            {palette_id: 4, color: Math.floor(Math.random()*16777215).toString(16), locked: false},
            {palette_id: 5, color: Math.floor(Math.random()*16777215).toString(16), locked: false}
        ]);
      };

      const lockPaletteColor = (e, palette_id) => {
        e.preventDefault();
        setPalette([
          ...palette, {
            palette_id: palette_id, color: palette.color, locked: !palette.locked
          }
        ])
      };
    
      useEffect(() => {
        generateRandomColor();
      }, []);
    

    // const toggleLock = (isLocked) => {
    //     dispatch(lockColor(false))
    // }

    const deleteColorPalette = (id) => {
        dispatch(deleteColorPalette(id))
    }

    return(
        <>
        <section className="section_colorContainer">
            <ColorCard color={palette[0].color} locked={palette[0].locked} lockPaletteColor={lockPaletteColor}/>
            <ColorCard color={palette[1].color} locked={palette[1].locked} lockPaletteColor={lockPaletteColor}/>
            <ColorCard color={palette[2].color} locked={palette[2].locked} lockPaletteColor={lockPaletteColor}/>
            <ColorCard color={palette[3].color} locked={palette[3].locked} lockPaletteColor={lockPaletteColor}/>
            <ColorCard color={palette[4].color} locked={palette[4].locked} lockPaletteColor={lockPaletteColor}/>
        </section>
        <section className="generate_btn-section">   
        <button
            type='button'
            className='generate_colors-btn'
            onClick={generateRandomColor}>GENERATE COLORS
        </button>
        </section>
        </>
    )
}

export default ColorContainer;