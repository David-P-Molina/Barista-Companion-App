import React from 'react'
import Recipe from './Recipe'

const RecipesList = ({ recipes }) => {
    return (
        <div className='recipe-list'>
            {recipes.map((recipe, index) => (
                <Recipe key={index} props={recipe} />
            ))}
        </div>
    )
}
export default RecipesList