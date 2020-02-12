import React, { useState } from 'react';
import './ColorCard.scss';
import openPadlock from '../images/open-lock.png';
import closedPadlock from '../images/closed-lock.png'

const ColorCard = ({ id, color, locked, palette_id, lockColor}) => {
  // const [isLocked, setIsLocked] = useState()
  console.log('color', color)
  // console.log('locked', locked)
  // console.log('initialPalette', initialPalette)
  // console.log(lockColor)
  // console.log(id)

    const toggleLock = !locked ? openPadlock : closedPadlock;
    return(
        <section className="section_colorCards" style={{backgroundColor: `#${color}`}}>
              <img className="colorCard_image-lock" 
              src={toggleLock}
              // src={require('../images/open-lock.png')}
              alt="lock"
              onClick={() => lockColor(id)} />
              <h3 className="colorCard_hex">#{color}</h3>
        </section>
    )
}

export default ColorCard;