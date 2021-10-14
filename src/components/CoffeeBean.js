import React from 'react'

const CoffeeBean =  ({props}) => {
        return (
            <div className='coffee-bean'>
                <h1>{props.name} by <i>{props.roaster_name}</i></h1>
                <p>{props.blend_type}</p>
                <span>{props.notes}</span>
                <p>{props.description}</p>
                {props.drying_method} {props.processing_method} {props.region} {props.roast} {props.whole_bean}
            </div>
        )
}
export default CoffeeBean