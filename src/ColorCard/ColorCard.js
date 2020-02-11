import React, { useState } from 'react';
import './ColorCard.scss';
import openPadlock from '../images/open-lock.png';
import closedPadlock from '../images/closed-lock.png'

const ColorCard = ({ color, locked, palette, lockPaletteColor}) => {
  // const [isLocked, setIsLocked] = useState()
  console.log('color', color)
  console.log('locked', locked)
  console.log('palette', palette)

    const lock = locked ? openPadlock : closedPadlock;
    return(
        <section className="section_colorCards" style={{backgroundColor: `#${color}`}}>
              <img className="colorCard_image-lock" 
              src={lock}
              alt="lock"
              onClick={(e) => lockPaletteColor(e, palette.palette_id)}/>
              <h3 className="colorCard_hex">#{color}</h3>
        </section>
    )
}

export default ColorCard;