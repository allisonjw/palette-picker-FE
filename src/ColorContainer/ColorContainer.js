import Palette from '../Palette/Palette';
import ColorCard from '../ColorCard/ColorCard';
import { getAllPalettes } from '../util/apiCalls';
import { setPalettes } from '../actions';
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

    return(
        <div>
            <ColorCard palettes={palettes}/>
            <Palette palettes={palettes}/>
            <button>GENERATE COLORS</button>
        </div>
    )
}

export default ColorContainer;