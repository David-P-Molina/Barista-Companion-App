import uuid from 'uuid'

function roastersReducer(state = [], action) {
    let idx
    switch (action.type) {
        case 'ADD_ROASTER':
            return [...state, action.book]
            
        case 'DELETE_ROASTER':
            idx = state.findIndex((roaster) => roaster.id === action.id)
            return [...state.slice(0, idx), ...state.slice(idx + 1)]

        case 'ADD_COFFEE_BEAN':
            let existingRoaster = state.filter(
                (roaster) => roaster.roasterName === action.coffeeBean.roasterName
            )
            if (existingRoaster.length > 0) {
                return state 
            } else {
                return [...state, {roasterName: action.coffeeBean.roasterName, id: uuid() }]
            }
        
        default:
            return state
    }
}
export default roastersReducer