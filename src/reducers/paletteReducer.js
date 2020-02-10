export const paletteReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PALETTES':
            return action.palettes
        case 'ADD_PALETTE':
            return [...state, action.palette]
        case 'DELETE_PALETTE':
            return [...state].filter(palette => palette.id !== action.id)
        case 'LOCK_COLOR':
            return action.isLocked
        default : 
            return state
    }
}