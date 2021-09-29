import React from 'react'
import Recipe from './Recipe'

const RecipesList = ({ recipes }) => {
    return (
        <div className='recipe-list'>
            {recipes.map((recipe, index) => {
               return <Recipe key={index} recipe={recipe} />
            })}
        </div>
    )
}
export default RecipesList