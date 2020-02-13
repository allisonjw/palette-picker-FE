import React from 'react';
import './Palette.scss';
import trashBin from '../images/rubbish.png'

const Palette = ({palette_name, id, color_1, color_2, color_3, color_4, color_5}) => {

    const getColors = () => {
        const colorArray = [color_1, color_2, color_3, color_4, color_5]
        const makeColors = colorArray.map(color => {
            console.log('COLOR', color)
            return(
                <div className="palette__colors" style={{backgroundColor: `${color}`}}>
                </div>
            )
        })
        return makeColors
    }
    return (
        <section className="section_palettes">
            <h3 className="palette_name">{palette_name}</h3>
            {getColors()}
            <img
                className="palette_delete-btn"
                src={trashBin}
                alt="delete button"
                // onClick={() => removePalette(palette_id)}
            />
        </section>
    )
}

export default Palette;