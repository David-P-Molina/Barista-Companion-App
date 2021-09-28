function brewMethodsReducer(state = [], action) {
    let idx
    switch (action.type) {
        case 'ADD_BREW_METHOD':
            return [...state, action.brew]
            
        case 'DELETE_BREW_METHOD':
            idx = state.findIndex((brew) => brew.id === action.id)
            return [...state.slice(0, idx), ...state.slice(idx + 1)]

        default:
            return state
    }
}
export default brewMethodsReducer