import React from 'react'
import Recipe from './Recipe'

const RecipesList = ({ recipes }) => {
    const recipesList = recipes.map((recipe) => {
        return <Recipe key={recipe.id} props={recipe} />
     })
    return (
        <div className='recipe-list'>
            {recipesList}
        </div>
    )
}
export default RecipesList