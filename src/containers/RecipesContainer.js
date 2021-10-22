import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeForm from '../components/RecipeForm'
import RecipesList from '../components/RecipesList'

class RecipesContainer extends Component {
    state = {
        recipes: []
    }

    render() {
        return (
            <div className='recipes-container'>
                <RecipeForm addRecipe={this.props.addRecipe} coffeeBeansList={this.props.coffeeBeans} brewMethodsList={this.props.brewMethods} errors={this.props.errors}/>
                <RecipesList recipes={this.props.recipes} />
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
        addRecipe: (formData) => dispatchFn({ type: 'ADD_RECIPE', payload: formData })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)