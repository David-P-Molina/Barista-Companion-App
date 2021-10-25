import React from 'react'

const Recipe = ({props}) => {
    const ratio = (props.water_in_grams / props.coffee_in_grams).toFixed(2) 
    const filter = () => {
        if (props.filter) {
        return "Filter Used"
    } else {
        return "No Filter Used"
    }
}
    return (
        <div className='recipe' id={props.id}>
            <h1>{props.name} Brewed on {props.date_attempted}</h1> 
            <h2><i>{props.brew_method_name}</i> - {filter()}</h2>
            <h3>{props.coffee_bean_name} by <i>{props.roaster_name}</i> roasted on {props.roast_date}</h3>
            <p>Coffee Weight: {props.coffee_in_grams}grams Grind Consistency: {props.grind}
            Water: {props.water_in_grams}grams{props.temperature} °F</p>
             <h5>1:{ratio} Water to Coffee Ratio</h5>
            <p>
            Brew Time: {props.time}, Bloom Time: {props.bloom_time}</p>
            <p>Feedback/Tasting Notes: {props.notes}</p>
        </div>
    )
 }

export default Recipe