function roastersReducer(
    state = {
        roasters: [], 
        loadingRoasters: false
    }, action
    ) {
    switch (action.type) {
        case 'START_LOADING_ROASTERS':
            return {
                ...state,
                loadingRoasters: true,
            }

        case 'FETCH_ROASTERS':
            return {
                ...state,
                roasters: action.roasters,
                loadingRoasters: false,
            }

        case 'ADD_ROASTER':
            return { 
                ...state,
                roasters: [
                    ...state.roasters, 
                    action.formData
                ]
            }
            
        case 'DELETE_ROASTER':
            return { 
                ...state,
                roasters: state.roasters.filter((roast) => roast.id !== action.id)
            }
        // case 'ADD_COFFEE_BEAN':
        //     let existingRoaster = state.roasters.filter(
        //         (roaster) => roaster.roasterName === action.coffeeBean.roasterName
        //     )
        //     if (existingRoaster.length > 0) {
        //         return state 
        //     } else {
        //         return { 
        //             coffeeBeans: [...state, 
        //             {roasterName: action.coffeeBean.roasterName, 
        //             id: uuid() }]
        //     }
        //     }
        
        default:
            return state
    }
}
export default roastersReducer