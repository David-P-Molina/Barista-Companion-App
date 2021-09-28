import React from 'react'

const CoffeeBean =  (props) => {
        return (
            <div className='coffee-bean'>
                <h1>{props.name} - {props.roasters.name}</h1>
                <p>{props.description}</p>
            </div>
        )
}
export default CoffeeBean