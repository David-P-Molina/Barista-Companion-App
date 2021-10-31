import React from 'react'
import { Button } from 'react-bootstrap'

class Recipe extends React.Component {
    handleOnClick = () => {
        this.props.deleteRecipe(this.props.recipe.id)
    }
    render() {
        const {
            recipe: { id, name, date_attempted, whole_bean, brew_method_name, coffee_bean_name, roaster_name, roast_date, grind, coffee_in_grams, water_in_grams, temperature, filter, time, bloom_time, notes, deletable}
        } = this.props
    const renderDeleteEditBtn = () => {
        if (deletable === true) {
            return ( 
            <>
                <Button variant='danger' size='sm' onClick={() => this.handleOnClick(id)}>Delete</Button> 
                {/* <button onClick='{props.editRecipeMethod}'>Edit</button> */}
            </>
            )
        }
    }
    const ratio = (water_in_grams / coffee_in_grams).toFixed(1) 
    const filterBoolean = () => {
        if (filter) {
            return "Filter Used"
        } else {
            return "No Filter Used"
        }
    }
    const wholeBean = () => {
        if (whole_bean) {
            return "Whole Bean"
        } else {
            return "Ground"
        }
    }
    const convertTime = (num) => {
        if( num === '0' ) {
            return 'N/A'
        } else {
            const hours = Math.floor(num / 3600)
            const minutes = Math.floor(num % 3600 / 60)
            const seconds = Math.floor(num % 3600 % 60)
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
        <div className='recipe' id={id}>
            <h1>{name} Brewed on {date_attempted}</h1> 
            {renderDeleteEditBtn()}
            <h2><i>{brew_method_name}</i> - {filterBoolean()}</h2>
            <h3>{coffee_bean_name} by <i>{roaster_name}</i> roasted on {roast_date}</h3>
            <p>Coffee Weight: {coffee_in_grams}grams Grind Consistency: {grind} - {wholeBean()}
            Water: {water_in_grams}grams{temperature} °F</p>
             <h5>1:{ratio} Water to Coffee Ratio</h5>
            <p>
            Brew Time: {convertTime(time)}, Bloom Time: {convertTime(bloom_time)}</p>
            <p>Feedback/Tasting Notes: {notes}</p>
        </div>
    )
 }
}

export default Recipe