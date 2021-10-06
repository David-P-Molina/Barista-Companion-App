import React from 'react'
// import Timer from './Timer'

const Recipe = (props) => {
    return (
        <div className='recipe'>
            <h1>{props.name}</h1>
            <ul>
                <li>Ingredients</li>
            </ul>
            {/* <Timer /> */}
        </div>
    )
}

export default Recipe