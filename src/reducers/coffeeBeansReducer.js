function coffeeBeansReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_COFFEE_BEAN':
            return [...state, action.book]
        default:
            return state
    }
}
export default coffeeBeansReducer