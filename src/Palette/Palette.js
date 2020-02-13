import React from 'react';
import './Palette.scss';
import { useDispatch } from 'react-redux';
import trashBin from '../images/rubbish.png';
import { deletePalette } from '../util/apiCalls';
import { deleteColorPalette } from '../actions';

const Palette = ({palette_name, id, color_1, color_2, color_3, color_4, color_5}) => {
    const dispatch = useDispatch()
 
    const getColors = () => {
        const colorArray = [color_1, color_2, color_3, color_4, color_5]
        const makeColors = colorArray.map(color => {
            return(
                <div className="palette__colors" style={{backgroundColor: `${color}`}}>
                </div>
            )
        })
        return makeColors
    }

    const removePalette = (id) => {
        dispatch(deleteColorPalette(id));
        const body = {
          id: id
        }
        deletePalette('palettes', 'DELETE', body);
    };

    return (
        <section className="section_palettes">
            <h3 className="palette_name">{palette_name}</h3>
            {getColors()}
            <img
                className="palette_delete-btn"
                src={trashBin}
                alt="delete button"
                onClick={() => removePalette(id)}
            />
        </section>
    )
}

export default Palette;