import React, from 'react'

const BrewMethod = (props) => {
        return (
            <div classname='brew-method'>
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <h4>{props.equipment}</h4>
                {/* Iterate over a list of equipment in a ul or import an equipmentlist container */}
            </div>
        )
}

export default BrewMethod