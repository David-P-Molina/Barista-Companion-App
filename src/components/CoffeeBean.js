import React from 'react'

const CoffeeBean =  ({props}) => {
    const deleteBtn = this.test
        return (
            <div className='coffee-bean' id={props.id}>
                <h1>{props.name} by <i>{props.roaster_name}</i></h1>
                <p>Type: {props.blend_type}</p>
                Region: {props.region} 
                <span>Tasting Notes: {props.notes}</span>
                <p>{props.description}</p>
                Drying Method: {props.drying_method} 
                Processing Method: {props.processing_method} 
                Roast Level: {props.roast} {props.whole_bean}
            </div>
        )
}
export default CoffeeBean