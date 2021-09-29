import React from 'react'
import Recipe from './Recipe'

const RecipesList = ({ recipes }) => {
    const recipesList = recipes.map((recipe, index) => {
        return <Recipe key={index} props={recipe} />
     })
    return (
        <div className='recipe-list'>
            {recipesList}
        </div>
    )
}
export default RecipesList