import React from 'react'
// import Timer from './Timer'

const Recipe = (props) => {
    return (
        <div className='recipe'>
            <h1>{props.name}</h1>
            <span>{props.brew_method_name}</span>
            Bean: {props.coffee_bean_name} by {props.roaster_name}
            <ul>
                <li>Ingredients</li>
            </ul>
            {/* <Timer /> */}
        </div>
    )
 }

export default Recipe