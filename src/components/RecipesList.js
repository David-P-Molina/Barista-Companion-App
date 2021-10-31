import React from 'react'
import Recipe from './Recipe'
import { RecipeHeader } from './styling/RecipeHeader'

const RecipesList = ({ recipes, deleteRecipe }) => {
    const recipesList = recipes.map((recipe, index) => {
        return <Recipe key={index} recipe={recipe} deleteRecipe={deleteRecipe}/>
     })
    return (
        <div className='list'>
            <RecipeHeader /><br />
            {recipesList}
        </div>
    )
}
export default RecipesList