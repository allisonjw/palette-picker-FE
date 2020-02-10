import React from 'react';
import './ColorCard.scss';

const ColorCard = ({ toggleLock, currentPalette}) => {
   console.log(toggleLock)
    return(
        <section className="section_colorCards">
            <div>
              <img className="colorCard_image-lock" src={require("../images/open-lock.png")}/>
              <h3>#{currentPalette}</h3>
            </div>
            {/* <div>
              <h3>{color_2}</h3>
            </div>
            <div>
              <h3>{color_3}</h3>
            </div>
            <div>
              <h3>{color_4}</h3>
            </div>
            <div>
              <h3>{color_5}</h3> */}
            {/* </div> */}

        </section>
    )
}

export default ColorCard;