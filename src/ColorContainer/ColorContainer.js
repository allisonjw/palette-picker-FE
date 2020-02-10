import Palette from '../Palette/Palette';
import ColorCard from '../ColorCard/ColorCard';
import { getAllPalettes } from '../util/apiCalls';
import { setPalettes, lockColor, deletePalette } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import './ColorContainer.scss';

const ColorContainer = () => {
    const dispatch = useDispatch()
    const [palette, setPalette] = useState([])  
    const palettes = useSelector(state => state.palettes) 

    const fetchPalettes = async () => {
        try {
        const response = await getAllPalettes();
        setPalette(response.palettes);
        dispatch(setPalettes(response));
        } catch(error) {
            console.log(error);
        }
    };
    useEffect(() => {
      fetchPalettes();
    }, []);

    const toggleLock = () => {
        // dispatch(lockColor())
    }

    const deleteColorPalette = (id) => {
        dispatch(deletePalette(id))
    }

    const generateRandomColor = () => {

    }

    const currentPalette = () => {
        let color = Math.floor(Math.random()*16777215).toString(16)
        return color
    }

    return(
        <section className="section_colorContainer">
            <ColorCard toggleLock={toggleLock()} currentPalette={currentPalette()}/>
            <ColorCard toggleLock={toggleLock()} currentPalette={currentPalette()}/>
            <ColorCard toggleLock={toggleLock()} currentPalette={currentPalette()}/>
            <ColorCard toggleLock={toggleLock()} currentPalette={currentPalette()}/>
            <ColorCard toggleLock={toggleLock()} currentPalette={currentPalette()}/>
        <button
            type='button'
            className='generate_colors-btn'
            onClick={generateRandomColor}>GENERATE COLORS
        </button>
        </section>
    )
}

export default ColorContainer;