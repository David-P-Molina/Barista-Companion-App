function coffeeBeansReducer(
    state = {
        coffeeBeans: [],
    }, action
    ) {
    let idx
    switch (action.type) {
        case 'ADD_COFFEE_BEAN':
            return { coffeeBeans: [...state.coffeeBeans, action.payload]}

        case 'DELETE_COFFEE_BEAN':
            idx = state.findIndex((bean) => bean.id === action.id)
            return [...state.slice(0, idx), ...state.slice(idx + 1)]

        default:
            return state
    }
}
export default coffeeBeansReducer