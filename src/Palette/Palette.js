import React from 'react';
import './Palette.scss';
import trashBin from '../images/rubbish.png'

const Palette = () => {
    return (
        <section className="section_palettes">
            <h3 className="palette_name">{}</h3>
            <img
                className='deleteBtn'
                src={trashBin}
                alt='delete button'
                // onClick={() => removePalette(palette_id)}
            />
            {/* {displayColors} */}
        </section>
    )
}

export default Palette;