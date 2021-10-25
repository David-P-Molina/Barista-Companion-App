import React from 'react'

const Recipe = ({props}) => {
    const ratio = (props.water_in_grams / props.coffee_in_grams).toFixed(1) 
    const filter = () => {
        if (props.filter) {
            return "Filter Used"
        } else {
            return "No Filter Used"
        }
    }
    const convertTime = (num) => {
        if( num === '0' ) {
            return 'N/A'
        } else {
            const hours = Math.floor(num / 3600)
            const minutes = Math.floor(num % 3600 / 60)
            const seconds = Math.floor(num % 3600 % 60)
            // debugger
            if (hours > 0) {
                return hours + ' hr ' + minutes + ' min ' + seconds + ' sec '
            } else if (hours === 0 && minutes === 0) {
                return seconds + ' sec'
            } else if (hours === 0 && seconds === 0) {
                return minutes + ' min '
            } else {
                return minutes + ' min ' + seconds + ' sec ' 
            }
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
            Brew Time: {convertTime(props.time)}, Bloom Time: {convertTime(props.bloom_time)}</p>
            <p>Feedback/Tasting Notes: {props.notes}</p>
        </div>
    )
 }

export default Recipe