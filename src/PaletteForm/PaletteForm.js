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
            <form>
                <select>project # 1</select>
                <input/>
                <button>Submit Palette</button>
            </form>
        )
    }
}

export default PaletteForm;
