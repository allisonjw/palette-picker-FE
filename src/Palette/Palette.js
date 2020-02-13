import React from 'react';
import './Palette.scss';
import trashBin from '../images/rubbish.png'

const Palette = ({name, id, color_1, color_2, color_3, color_4, color_5}) => {

    // pass all the props down from projects. dipslay the {palette_name}
    // create an array const colors =[color_1, color_2,c color_3, color_4, color_5]
    // map over colors and in a variable called {displayColors} and add inline styling
    // like we did in ColorCard (style={{ backgroundColor: `#${color}` }}

    // const displayColors = colors.map(color => {
    //     return (
    //       <div
    //         className="palette__colors"
    //         style={{ backgroundColor: `#${color}` }}
    //       ></div>
    //     );
    // });

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
            <h3 className="palette_name">{name}</h3>
            {getColors()}
            <img
                className="palette_delete-btn"
                src={trashBin}
                alt="delete button"
                // onClick={() => removePalette(palette_id)}
            />
            {/* {displayColors} */}
        </section>
    )
}

export default Palette;