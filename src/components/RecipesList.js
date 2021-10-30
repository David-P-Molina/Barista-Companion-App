import React from 'react'
import Recipe from './Recipe'

const RecipesList = ({ recipes, deleteRecipe }) => {
    const recipesList = recipes.map((recipe, index) => {
        return <Recipe key={index} recipe={recipe} deleteRecipe={deleteRecipe}/>
     })
    return (
        <div className='recipe-list'>
            <h1>Recipes</h1><br />
            {recipesList}
        </div>
    )
}
export default RecipesList