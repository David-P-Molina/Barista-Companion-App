import React, { Component } from 'react'
import RecipeForm from '../components/RecipeForm'
import RecipesList from '../components/RecipesList'
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
                <RecipesList 
                    recipes={this.props.recipes} 
                    deleteRecipe={this.props.deleteRecipe}
                />
                <RecipeForm 
                    addRecipe={this.props.addRecipe} 
                    coffeeBeansList={this.props.coffeeBeans} 
                    brewMethodsList={this.props.brewMethods} 
                    errors={this.props.errors}
                />
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