import React, { Component } from 'react'
import RecipeForm from '../components/RecipeForm'
import RecipesList from '../components/RecipesList'
import Recipe from '../components/Recipe'
import { connect } from 'react-redux'
import { deleteRecipeAction, sendRecipeFormDataAction } from '../actions/RecipeActions'
import { Route, Switch} from 'react-router-dom'

class RecipesContainer extends Component {
    state = {
        recipes: []
    }

    render() {
        return (
            <div className='recipes-container'>
                <Switch>
                    <Route exact path='/recipes'>
                        <RecipesList 
                            recipes={this.props.recipes} 
                            deleteRecipe={this.props.deleteRecipe}
                        />
                    </Route>
                    <Route exact path='/recipes/new' component={(routeInfo) => {
                        return (
                            <RecipeForm 
                                addRecipe={this.props.addRecipe} 
                                coffeeBeansList={this.props.coffeeBeans} 
                                brewMethodsList={this.props.brewMethods} 
                                errors={this.props.errors}
                                return={() => routeInfo.history.push('/recipes')}
                            />
                        )
                    }}/>
                    <Route exact path='/recipes/:id' component={(routeInfo) => {
                        const id = parseInt(routeInfo.match.params.id)
                        const foundRecipe = this.props.recipes.find((recipe) => recipe.id === id)
                        const recipeInfo = <Recipe recipe={foundRecipe}/>
                        return (this.props.recipes.length > 0 ? recipeInfo : <h1>Loading Recipe...</h1>)
                    }}
                    />
                </Switch>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        errors: state.errors.recipeErrors,
        recipes: state.recipes.recipes,
        coffeeBeans: state.coffeeBeans.coffeeBeans,
        brewMethods: state.brewMethods.brewMethods,
    }
}

const mapDispatchToProps = (dispatchFn) => {
    return {
        addRecipe: (formData) => dispatchFn(sendRecipeFormDataAction(formData)),
        deleteRecipe: (id) => dispatchFn(deleteRecipeAction(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)