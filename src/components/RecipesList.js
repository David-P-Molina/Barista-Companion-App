import React from 'react'
import { connect } from 'react-redux'
import Recipe from './Recipe'

const RecipesList = ({ recipes }) => {
    return (
        <div className='recipe-list'>
            {recipes.map((recipe) => (
                <Recipe props={recipe} />
            ))}
        </div>
    )
}
const mapStateToProps = (state) => {
    return { recipes: state.recipes }
}

export default connect(mapStateToProps)(RecipesList)