export const projectReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            console.log('action projects', action.projects)
            return action.projects
        case 'ADD_PROJECT':
            return [...state, action.project]
        case 'DELECT_PROJECT':
            return [...state].filter(project => project.id !== action.id)
        default : 
            return state
    }
}