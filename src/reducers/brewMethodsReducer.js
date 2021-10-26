function brewMethodsReducer(
    state = {
        brewMethods: [],
        loadingBrewMethods: false
    }, action
    ) {
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
                brewMethods: [
                    ...state.brewMethods, 
                    action.formData
                ]
            }
            
        case 'DELETE_BREW_METHOD':
            return {
                ...state,
                brewMethods: state.brewMethods.filter((brew) => brew.id !== action.id)
            }

        default:
            return state
    }
}
export default brewMethodsReducer