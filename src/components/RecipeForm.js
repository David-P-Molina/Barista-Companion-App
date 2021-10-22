import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendRecipeFormDataAction } from '../actions/RecipeActions'

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
            date_attempted: this.state.dateAttempted,
            brew_method_id: this.state.brewMethod,
            coffee_bean_id: this.state.coffeeBean,
            roast_date: this.state.roastDate,
            grind: this.state.grind,
            coffee_in_grams: this.state.coffeeWeight,
            water_in_grams: this.state.waterWeight,
            temperature: this.state.temperature,
            filter: this.state.filter,
            time: this.state.time,
            bloom_time: this.state.bloomTime,
            notes: this.state.notes
        }
        this.props.sendRecipeFormDataWithDispatchFn(formData)
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

    renderBrewMethods = () => {
        return this.props.brewMethodsList.map((brew) => <option key={brew.name} value={brew.id}>{brew.name}</option>)
    }
    renderCoffeeBeans = () => {
        return (
            this.props.coffeeBeansList.map((bean) => (
                <option 
                    key={bean.name} 
                    value={bean.id}>
                    {bean.name} by {bean.roaster_name} 
                </option>)
            ))
    }
    render() {
        return (
            <div>
                <h1>Create Recipe</h1>
                <form className='recipe-form' onSubmit={this.handleOnSubmit}>
                    <label htmlFor='recipe-name'>Recipe Name: </label> <br />
                    <input 
                        required type='text' 
                        name='name'
                        placeholder='Take 2, Use Different Filter, etc.'
                        value={this.state.name} 
                        onChange={this.handleOnChange}
                    />  <br />
                    <label htmlFor='date-recipe-attempted'>Brew Date: </label>
                    <input 
                        required type='date'
                        name='dateAttempted'
                        value={this.state.dateAttempted}
                        onChange={this.handleOnChange}
                    /><br />
                    <label htmlFor='brew-method'>Brew Method: </label> <br />
                    <select 
                        required type='text' 
                        name='brewMethod'
                        value={this.state.brewMethod} 
                        onChange={this.handleOnChange}
                    >
                         <option value=''>Select a Brew Method</option>   
                        {this.renderBrewMethods()}
                    </select>
                         <br />
                    <label htmlFor='coffee-bean'>Coffee Bean: </label> <br />
                    <select 
                        required type='text' 
                        name='coffeeBean'
                        value={this.state.coffeeBean} 
                        onChange={this.handleOnChange}
                    >
                        <option value=''>Select a Coffeebean</option>
                        {this.renderCoffeeBeans()}
                    </select> <br />
                    <label htmlFor='coffee-bean-roast-date'>Roasted on </label>
                    <input 
                        type='date'
                        name='roast-date'
                        value={this.state.roastDate}
                        onChange={this.handleOnChange}
                    /> <br />
                    <label htmlFor='grind'>Grind Size: </label> <br />
                    <select
                        type='text' 
                        name='grind'
                        value={this.state.grind} 
                        onChange={this.handleOnChange}
                    >
                        <option>--Select Grind Level--</option>
                        <option value='Coarse'>Coarse</option>
                        <option value='Medium Coarse'>Medium-Coarse</option>
                        <option value='Medium'>Medium</option>
                        <option value='Medium-Fine'>Medium-Fine</option>
                        <option value='Fine'>Fine</option>
                        <option value='Extra-Fine/Espresso'>Extra-Fine/Espresso</option>
                    </select> <br />
                    <label htmlFor='coffee-weight'>Coffee Weight: </label> <br />
                    <input 
                        type='number' 
                        name='coffeeWeight'
                        value={this.state.coffeeWeight} 
                        onChange={this.handleOnChange}/> Grams<br />
                    <label htmlFor='water-weight'>Water Weight: </label> <br />
                    <input 
                        type='number' 
                        name='waterWeight'
                        value={this.state.waterWeight} 
                        onChange={this.handleOnChange}
                    /> Grams<br />
                    <label htmlFor='temperature'>Temperature: </label> <br />
                    <input 
                        type='number' 
                        name='temperature'
                        value={this.state.temperature} 
                        onChange={this.handleOnChange}
                    /> °F <br />
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