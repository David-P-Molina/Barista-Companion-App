import React, { Component } from 'react'
import { connect } from 'react-redux'

class RecipesContainer extends Component {
    
    render() {
        return (
            <div className='recipes-container'>
                
            </div>
        )
    }
}
const mapDispatchToProps = () => {
    return {
        addRecipe: (formData) => dispatchEvent({ type: 'ADD_RECIPE', payload: formData })
    }
}
export default connect(null, mapDispatchToProps)(RecipesContainer)