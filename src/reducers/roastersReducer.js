function roastersReducer(state = [], action) {
    let idx
    switch (action.type) {
        case 'ADD_ROASTER':
            return [...state, action.book]
            
        case 'DELETE_ROASTER':
            idx = state.findIndex((roaster) => roaster.id === action.id)
            return [...state,slice(0, idx), ...state.slice(idx + 1)]

        default:
            return state
    }
}
export default roastersReducer