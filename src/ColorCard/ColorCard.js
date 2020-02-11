import React, { useState } from 'react';
import './ColorCard.scss';
import openPadlock from '../images/open-lock.png';
import closedPadlock from '../images/closed-lock.png'

const ColorCard = ({ color, locked, lockPaletteColor}) => {
  const [isLocked, setIsLocked] = useState()
  console.log('color', color)
  console.log('locked', locked)

    const lock = locked ? openPadlock : closedPadlock;
    return(
        <section className="section_colorCards" style={{backgroundColor: `#${color}`}}>
              <img className="colorCard_image-lock" 
              src={lock}
              alt="lock"
              onClick={(e) => setIsLocked(!locked)}/>
              <h3 className="colorCard_hex">#{color}</h3>
        </section>
    )
}

export default ColorCard;