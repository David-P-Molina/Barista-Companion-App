import React from 'react'

class Recipe extends React.Component {
    handleOnClick = () => {
        this.props.deleteRecipe(this.props.recipe.id)
    }
    render() {
    const renderDeleteEditBtn = () => {
        if (this.props.recipe.deletable === true) {
            return ( 
            <>
                <button onClick={() => this.handleOnClick(this.props.recipe.id)}>Delete</button> 
                {/* <button onClick='{props.editRecipeMethod}'>Edit</button> */}
            </>
            )
        }
    }
    const ratio = (this.props.recipe.water_in_grams / this.props.recipe.coffee_in_grams).toFixed(1) 
    const filter = () => {
        if (this.props.recipe.filter) {
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
        <div className='recipe' id={this.props.recipe.id}>
            {renderDeleteEditBtn()}
            <h1>{this.props.recipe.name} Brewed on {this.props.recipe.date_attempted}</h1> 
            <h2><i>{this.props.recipe.brew_method_name}</i> - {filter()}</h2>
            <h3>{this.props.recipe.coffee_bean_name} by <i>{this.props.recipe.roaster_name}</i> roasted on {this.props.recipe.roast_date}</h3>
            <p>Coffee Weight: {this.props.recipe.coffee_in_grams}grams Grind Consistency: {this.props.recipe.grind}
            Water: {this.props.recipe.water_in_grams}grams{this.props.recipe.temperature} °F</p>
             <h5>1:{ratio} Water to Coffee Ratio</h5>
            <p>
            Brew Time: {convertTime(this.props.recipe.time)}, Bloom Time: {convertTime(this.props.recipe.bloom_time)}</p>
            <p>Feedback/Tasting Notes: {this.props.recipe.notes}</p>
        </div>
    )
 }
}

export default Recipe