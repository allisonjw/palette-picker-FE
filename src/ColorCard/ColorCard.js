import React from 'react';
import './ColorCard.scss';
import openPadlock from '../images/open-lock.png';
import closedPadlock from '../images/closed-lock.png'

const ColorCard = ({ color, lockPaletteColor}) => {
    // const lock = isLocked ? closedPadlock : openPadlock;
    return(
        <section className="section_colorCards" style={{backgroundColor: `#${color}`}}>
              <img className="colorCard_image-lock" 
            //   src={lock}
              src={require("../images/open-lock.png")}
              alt=""
              onClick={() => lockPaletteColor(color.palette_id)}/>
              <h3 className="colorCard_hex">#{color}</h3>
        </section>
    )
}

export default ColorCard;