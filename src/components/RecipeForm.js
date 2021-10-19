import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendRecipeFormDataAction } from '../actions/RecipeAction'

class RecipeForm extends Component {
    state = {
        name: '',
        dateAttempted: '',
        brewMethod: '',
        coffeeBean: '',
        roastDate: '',
        grind: '',
        coffeeWeight: '',
        waterWeight: '',
        temperature: '',
        filter: '',
        time: '',
        bloomTime: '',
        notes: '',
    }
    handleOnChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        let formData = {
            name: this.state.name,
            dateAttempted: this.state.dateAttempted,
            brewMethod: this.state.brewMethod,
            coffeeBean: this.state.coffeeBean,
            roastDate: this.state.roastDate,
            grind: this.state.grind,
            coffeeWeight: this.state.coffeeWeight,
            waterWeight: this.state.waterWeight,
            temperature: this.state.temperature,
            filter: this.state.filter,
            time: this.state.time,
            bloomTime: this.state.bloomTime,
            notes: this.state.notes
        }
        //this.sendRecipeData(formData)
        // this.props.addRecipe(formData)
        this.setState({
            name: '',
            dateAttempted: '',
            brewMethod: '',
            coffeeBean: '',
            roastDate: '',
            grind: '',
            coffeeWeight: '',
            waterWeight: '',
            temperature: '',
            filter: '',
            time: '',
            bloomTime: '',
            notes: '',
        })
    }

    render() {
        return (
            <div>
                <form className='recipe-form' onSubmit={this.handleOnSubmit}>
                    <label htmlFor='recipe-name'>Recipe Name: </label> <br />
                    <input 
                        type='text' 
                        name='name'
                        placeholder='Take 2, Use Different Filter, etc.'
                        value={this.state.name} 
                        onChange={this.handleOnChange}
                    />  
                    <label htmlFor='date-recipe-attempted'>Date Recipe was Brewed: </label>
                    <input 
                        type='date'
                        name='dateAttempted'
                        placeholder={Date.now}
                        value={this.state.dateAttempted}
                        onChange={this.handleOnChange}
                    /><br />
                    <label htmlFor='brew-method'>Brew Method: </label> <br />
                    <select 
                        type='text' 
                        name='brewMethod'
                        value={this.state.brewMethod} 
                        onChange={this.handleOnChange}
                    /> <br />
                    <label htmlFor='coffee-bean'>Coffee Bean: </label> <br />
                    <input 
                        type='text' 
                        name='coffeeBean'
                        value={this.state.coffeeBean} 
                        onChange={this.handleOnChange}
                    /> <br />
                    <input 
                        type='date'
                        name='roast-date'
                        value={this.state.roastDate}
                        onChange={this.handleOnChange}
                    /> <br />
                        <label htmlFor='grind'>Grind Size: </label> <br />
                    <option 
                        type='text' 
                        name='grind'
                        value={this.state.grind} 
                        onChange={this.handleOnChange}
                    /> <br />
                    <label htmlFor='coffee-weight'>Grams of Coffee: </label> <br />
                    <input 
                        type='number' 
                        name='coffeeWeight'
                        value={this.state.coffeeWeight} 
                        onChange={this.handleOnChange}/> <br />
                    <label htmlFor='water-weight'>Grams of Water: </label> <br />
                    <input 
                        type='number' 
                        name='waterWeight'
                        value={this.state.waterWeight} 
                        onChange={this.handleOnChange}
                    /> <br />
                    <label htmlFor='temperature'>Temperature: </label> <br />
                    <input 
                        type='number' 
                        name='temperature'
                        value={this.state.temperature} 
                        onChange={this.handleOnChange}
                    /> <br />
                    <label htmlFor='filter'>Filter Needed: </label>
                    <input
                        type='checkbox'
                        name='filter'
                        value={this.state.filter}
                        onChange={this.handleOnChange}
                    
                /> <br />
                    <label htmlFor='time'>Brew Time: </label> <br />
                    <input 
                        type='time' 
                        name='time'
                        value={this.state.time} 
                        onChange={this.handleOnChange}
                    /> <br />
                    <input 
                        type='time' 
                        name='bloomTime'
                        value={this.state.bloomTime} 
                        onChange={this.handleOnChange}
                    /> <br />
                    <input
                        type='text'
                        name='notes'
                        value={this.state.notes}
                        onChange={this.handleOnChange}
                    />
                    <button type='submit'>Create Recipe</button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatchFn) => {
    return {
        sendRecipeFormDataWithDispatchFn: (data) => dispatchFn(sendRecipeFormDataAction(data))
    }
}
export default connect(null, mapDispatchToProps)(RecipeForm)