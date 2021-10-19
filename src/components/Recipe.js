import React from 'react'

const Recipe = ({props}) => {
    return (
        <div className='recipe'>
            <h1>{props.name} Brewed on {props.date_attempted}</h1> 
            <span>{props.brew_method_name}</span>
            Bean: {props.coffee_bean_name} by {props.roaster_name} Roast Date: {props.roast_date}
            Grind Size: {props.grind} Coffee Weight: {props.coffee_in_grams} grams- Grind Consistency: {props.grind}
            <h4>Water: {props.water_in_grams} grams</h4><h4>{props.temperature} °F</h4>
            <h4>Filter {props.filter}</h4> 
            <h4>Brew Time: {props.time}, Bloom Time: {props.bloom_time}</h4>
            {/* <Timer /> */}
            Notes: {props.notes}
        </div>
    )
 }

export default Recipe