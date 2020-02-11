import ColorCard from '../ColorCard/ColorCard';
import { getAllPalettes, addPalette, deletePalette } from '../util/apiCalls';
import { setPalettes, lockColor, deleteColorPalette } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import './ColorContainer.scss';
import Palette from '../Palette/Palette';

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
    
      const lockPaletteColor = (palette_id) => {
        // event.preventDefault();
        setPalette([
          ...palette, {
            palette_id: palette_id, color: palette[`color${palette_id}`]['color'], locked: !palette[`color${palette_id}`]['locked']
          }
        ])
      };
    
      useEffect(() => {
        generateRandomColor();
      }, []);
    
    // const palettes = useSelector(state => state.palettes) 

    // const fetchPalettes = async () => {
    //     try {
    //     const response = await getAllPalettes();
    //     setPalette(response.palettes);
    //     dispatch(setPalettes(response));
    //     } catch(error) {
    //         console.log(error);
    //     }
    // };
    // useEffect(() => {
    //   fetchPalettes();
    // }, []);

    // const toggleLock = (isLocked) => {
    //     dispatch(lockColor(false))
    // }

    const deleteColorPalette = (id) => {
        dispatch(deleteColorPalette(id))
    }

    return(
        <>
        <section className="section_colorContainer">
            <ColorCard color={palette[0].color} lockPaletteColor={lockPaletteColor}/>
            <ColorCard color={palette[1].color} lockPaletteColor={lockPaletteColor}/>
            <ColorCard color={palette[2].color} lockPaletteColor={lockPaletteColor}/>
            <ColorCard color={palette[3].color} lockPaletteColor={lockPaletteColor}/>
            <ColorCard color={palette[4].color} lockPaletteColor={lockPaletteColor}/>
        </section>
        <section className="generate_btn-section">   
        <button
            type='button'
            className='generate_colors-btn'
            onClick={generateRandomColor}>GENERATE COLORS
        </button>
        </section>
        <Palette />
        </>
    )
}

export default ColorContainer;