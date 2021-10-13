function brewMethodsReducer(
    state = {
        brewMethods: [],
    }, action
    ) {
    let idx
    switch (action.type) {
        case 'FETCH_BREW_METHODS':
            return {
                ...state,
                brewMethods: action.brewMethods.data
            }
        case 'ADD_BREW_METHOD':
            return { brewMethods: [...state.brewMethods, action.payload]}
            
        case 'DELETE_BREW_METHOD':
            idx = state.brewMethods.findIndex((brew) => brew.id === action.id)
            return { brewMethods: [...state.brewMethods.slice(0, idx), ...state.brewMethods.slice(idx + 1)]}

        default:
            return state
    }
}
export default brewMethodsReducer