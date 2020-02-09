import { combineReducers } from 'redux';
import { paletteReducer } from './paletteReducer';
import { projectReducer } from './projectReducer';

export const rootReducer = combineReducers ({ //for testing
    palettes: paletteReducer,
    projects: projectReducer
})

export default rootReducer; //access to index