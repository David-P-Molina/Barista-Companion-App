import { combineReducers } from 'redux'
import brewMethodsReducer from './brewMethodsReducer'
import coffeeBeansReducer from './coffeeBeansReducer'
import recipesReducer from './recipesReducer'
import roastersReducer from './roastersReducer'
// import userReducer from './userReducer'

const rootReducer = combineReducers({
    brewMethods: brewMethodsReducer,
    coffeeBeans: coffeeBeansReducer,
    recipes: recipesReducer,
    // user: userReducer,
    roasters: roastersReducer
})

export default rootReducer