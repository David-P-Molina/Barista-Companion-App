import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    brewMethods: brewMethodsReducer,
    coffeeBeans: coffeeBeansReducer,
    recipes: recipesReducer,
    roasters: roastersReducer
})

export default rootReducer