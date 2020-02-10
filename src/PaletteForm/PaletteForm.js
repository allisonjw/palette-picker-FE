import React, { Component } from 'react';
import './PaletteForm.scss';

class PaletteForm extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return(
            <form className="palette_form">
                <select className="palette_select">project # 1</select>
                <input className="palette_input"/>
                <button className="palette_btn">Submit Palette</button>
            </form>
        )
    }
}

export default PaletteForm;
