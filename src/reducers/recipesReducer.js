function recipesReducer(
    state = {
        recipes: [],
        loadingRecipes: false,
    }, action
    ) {
    switch (action.type) {
        case 'START_LOADING_RECIPES':
            return {
                ...state,
                loadingRecipes: true
            }
        case 'FETCH_RECIPES': 
            return {
                ...state,
                recipes: action.recipes,
                loadingRecipes: false,
            }
        case 'ADD_RECIPE':
            return { 
                recipes: [
                    ...state.recipes, 
                    action.payload
                ]
            }
        default:
            return state
}}

export default recipesReducer
