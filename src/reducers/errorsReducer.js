function errorsReducer(
    state = {
        errors: [],
    }, action
) {
    switch (action.type) {
        case 'DISPLAY_ERROR':
            return {
                ...state,
                errors: action.errors,
            }
        default:
            return state
    }
}

export default errorsReducer