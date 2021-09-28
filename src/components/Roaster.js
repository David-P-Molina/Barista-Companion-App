import React from 'react'

const Roaster = (props) => {
    return (
        <div className='roaster-card'>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Roaster
