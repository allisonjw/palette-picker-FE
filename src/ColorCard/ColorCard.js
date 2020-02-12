import React, { useState } from 'react';
import './ColorCard.scss';
import openPadlock from '../images/open-lock.png';
import closedPadlock from '../images/closed-lock.png'

const ColorCard = ({ color, locked, palette_id, lockColor}) => {

    const toggleLock = !locked ? openPadlock : closedPadlock;
    return(
        <section className="section_colorCards" style={{backgroundColor: `#${color}`}}>
              <img className="colorCard_image-lock" 
              src={toggleLock}
              alt="lock"
              onClick={() => lockColor(palette_id)} />
              <h3 className="colorCard_hex">#{color}</h3>
        </section>
    )
}

export default ColorCard;