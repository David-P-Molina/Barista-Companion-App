import React from 'react'

const Recipe = (props) => {

    return (
        <div className='recipe'>
            <h1>{props.name}</h1>
            <ul>
                <li>Ingredients</li>
            </ul>
        </div>
    )
}

export default Recipe