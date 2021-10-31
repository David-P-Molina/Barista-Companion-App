import { combineReducers } from 'redux'
import brewMethodsReducer from './brewMethodsReducer'
import coffeeBeansReducer from './coffeeBeansReducer'
import recipesReducer from './recipesReducer'
import roastersReducer from './roastersReducer'
import errorsReducer from './errorsReducer'

const rootReducer = combineReducers({
    brewMethods: brewMethodsReducer,
    coffeeBeans: coffeeBeansReducer,
    recipes: recipesReducer,
    roasters: roastersReducer,
    errors: errorsReducer
})

export default rootReducer