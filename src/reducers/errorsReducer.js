function errorsReducer(
    state = {
        errors: [],
        errorsPresent: false,
    }, action
) {
    switch (action.type) {
        case 'ERROR_FOUND':
            return {
                ...state,
                errorsPresent: true,
            }
        case 'DISPLAY_ERROR':
            return {
                ...state,
                errors: action.errors,
                errorsPresent: false,
            }
        default:
            return state
    }
}