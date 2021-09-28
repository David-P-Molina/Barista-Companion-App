function brewMethodsReducer(
    state = {
        brewMethods: [],
    }, action
    ) {
    let idx
    switch (action.type) {
        case 'ADD_BREW_METHOD':
            return { brewMethods: [...state.brewMethods, action.payload]}
            
        case 'DELETE_BREW_METHOD':
            idx = state.findIndex((brew) => brew.id === action.id)
            return [...state.slice(0, idx), ...state.slice(idx + 1)]//fix to reflect portion of state

        default:
            return state
    }
}
export default brewMethodsReducer