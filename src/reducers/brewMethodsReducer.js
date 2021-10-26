function brewMethodsReducer(
    state = {
        brewMethods: [],
        loadingBrewMethods: false
    }, action
    ) {
    let idx
    switch (action.type) {
        case "START_LOADING_BREW_METHODS":
            return {
                ...state,
                loadingBrewMethods: true,
            }
        case 'FETCH_BREW_METHODS':
            return {
                ...state,
                brewMethods: action.brewMethods,
                loadingBrewMethods: false,
            }
        case 'ADD_BREW_METHOD':
            return { 
                brewMethods: [...state.brewMethods, 
                action.payload]
            }
            
        case 'DELETE_BREW_METHOD':
            // const brewMethods= state.brewMethods.filter((brew) => brew.id !== action.id)
            // idx = state.brewMethods.findIndex((brew) => brew.id === action.id)
            return {
                brewMethods: state.brewMethods.filter((brew) => brew.id !== action.id)
            }

        default:
            return state
    }
}
export default brewMethodsReducer