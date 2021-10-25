function roastersReducer(
    state = {
        roasters: [], 
        loadingRoasters: false
    }, action
    ) {
    let idx
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
                roasters: [
                    ...state.roasters, 
                    action.payload
                ]
            }
            
        case 'DELETE_ROASTER':
            idx = state.roasters.findIndex((roaster) => roaster.id === action.id)
            return { 
                roasters: [
                    ...state.roasters.slice(0, idx), 
                    ...state.roasters.slice(idx + 1)
                ] 
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