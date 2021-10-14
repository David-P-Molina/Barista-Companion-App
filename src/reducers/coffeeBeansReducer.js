function coffeeBeansReducer(
    state = {
        coffeeBeans: [],
        loadingCoffeeBeans: false
    }, action
    ) {
    let idx
    switch (action.type) {
        case 'START_LOADING_COFFEE_BEANS':
            return {
                ...state,
                loadingCoffeeBeans: true,
            
            }

        case 'FETCH_COFFEE_BEANS':
            return {
                ...state, 
                coffeeBeans: action.coffeeBeans, 
                loadingCoffeeBeans: false
            }
        
        case 'ADD_COFFEE_BEAN':
            return { 
                ...state,
                coffeeBeans: [...state.coffeeBeans, action.payload]
            }

        case 'DELETE_COFFEE_BEAN':
            idx = state.coffeeBeans.findIndex((bean) => bean.id === action.id)
            return { 
                ...state,
                coffeeBeans: [...state.coffeeBeans.slice(0, idx), 
                ...state.coffeeBeans.slice(idx + 1)]
            }

        default:
            return state
    }
}
export default coffeeBeansReducer