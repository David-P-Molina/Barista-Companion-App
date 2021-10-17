import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeForm from '../components/RecipeForm'
import RecipesList from '../components/RecipesList'
import { fetchRecipes } from '../actions/RecipeAction'

class RecipesContainer extends Component {
    render() {
        return (
            <div className='recipes-container'>
                <RecipeForm addRecipe={this.props.addRecipe} />
                <RecipesList recipes={this.props.recipes} />
            </div>
        )
    }
}
const mapStateToProps = ({recipes}) => ({recipes})
const mapDispatchToProps = (dispatchFn) => {
    return {
        fetchRecipes: () => dispatchFn(fetchRecipes()),
        addRecipe: (formData) => dispatchFn({ type: 'ADD_RECIPE', payload: formData })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)