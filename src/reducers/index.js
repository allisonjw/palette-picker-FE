import { combineReducers } from 'redux';
import { palette } from './paletteReducer';
import { project } from './projectReducer';

export const rootReducer = combineReducers ({ //for testing
    palette,
    project
})

export default rootReducer; //access to index