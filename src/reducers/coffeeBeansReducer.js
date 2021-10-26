function coffeeBeansReducer(
    state = {
        coffeeBeans: [],
        loadingCoffeeBeans: false
    }, action
    ) {
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
                coffeeBeans: [
                    ...state.coffeeBeans, 
                    action.formData
                ]
            }

        case 'DELETE_COFFEE_BEAN':
            return { 
                ...state,
                coffeeBeans: state.coffeeBeans.filter((bean) => bean.id !== action.id)
            }

        default:
            return state
    }
}
export default coffeeBeansReducer