import React from 'react';
import './ColorCard.scss';
import openPadlock from '../images/open-lock.png';
import closedPadlock from '../images/closed-lock.png'

const ColorCard = ({ toggleLock, currentPalette}) => {
    // const lock = isLocked ? closedPadlock : openPadlock;
    return(
        <section className="section_colorCards" style={{backgroundColor: `#${currentPalette}`}}>
              <img className="colorCard_image-lock" 
            //   src={lock}
              src={require("../images/open-lock.png")}
              alt=""
              onClick={() => toggleLock()}/>
              <h3 className="colorCard_hex">#{currentPalette}</h3>
        </section>
    )
}

export default ColorCard;