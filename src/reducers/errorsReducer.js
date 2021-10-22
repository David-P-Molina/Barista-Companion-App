function errorsReducer(
    state = {
        brewMethodErrors: [],
        coffeeBeanErrors: [],
        recipeErrors: [],
        roasterErrors: [],
    }, action
) {
    switch (action.type) {
        case 'DISPLAY_BREW_METHOD_ERROR':
            return {
                ...state,
                brewMethodErrors: action.errors,
            }
        case 'DISPLAY_COFFEE_BEAN_ERROR':
            return {
                ...state,
                coffeeBeanErrors: action.errors,
            }    
        case 'DISPLAY_RECIPE_ERROR':
            return {
                ...state,
                recipeErrors: action.errors,
            }
        case 'DISPLAY_ROASTER_ERROR':
            return {
                ...state,
                roasterErrors: action.errors,
            }
        case 'CLEAR_ERRORS':
            return {
                ...state,
                brewMethodErrors: [],
                coffeeBeanErrors: [],
                recipeErrors: [],
                roasterErrors: [],
            }
        default:
            return state
    }
}

export default errorsReducer