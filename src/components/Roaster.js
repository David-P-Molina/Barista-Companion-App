import React from 'react'

const Roaster = ({props}) => {
    return (
        <div className='roaster-card' id={props.id}>
            <a href={props.url}><h1>{props.name}</h1></a>
            <h3>{props.year_founded}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Roaster
