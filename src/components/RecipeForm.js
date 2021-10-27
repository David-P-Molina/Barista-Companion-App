import React, { Component } from 'react'
import Error from './Error'

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
        hrTime: '0',
        minTime: '0',
        secTime: '0',
        bloomTime: '0',
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
            time: (parseInt(this.state.hrTime) * 3600) + (parseInt(this.state.minTime) * 60) + parseInt(this.state.secTime),
            bloom_time: this.state.bloomTime,
            notes: this.state.notes,
            deletable: true,
        }
        this.props.addRecipe(formData)
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
            hrTime: '0',
            minTime: '0',
            secTime: '0',
            bloomTime: '0',
            notes: '',
        })
    }

    renderBrewMethods = () => {
        return (
            this.props.brewMethodsList.map((brew) => {
                return <option key={brew.name} value={brew.id}>{brew.name}</option>
            })
        )
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
    renderNumOptions(numbers) {
        const numArray = []
        for (let i = 0; i <= numbers; i++) {
            numArray.push(i)
        }
        return numArray.map((number) => (
            <option key={number} value={number}>{number}</option>
        ))
    }
    renderHourTimerForColdBrew = () => {
        if (this.state.brewMethod === "6" || this.state.brewMethod === "10") {
            return (
                <select 
                    type='number' 
                    name='hrTime'
                    value={this.state.hrTime} 
                    max='24'
                    onChange={this.handleOnChange}
                >
                    <option value='0'>Hour(s)</option>
                    {this.renderNumOptions(24)}
                 </select>
            )
        }
    }
    render() {
        return (
            <div>
                <h1>Create Recipe</h1>
                <div className='errors'>
                    <Error errors={this.props.errors}/>
                </div>
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
                        <option value=''>Select a Coffee Bean</option>
                        {this.renderCoffeeBeans()}
                    </select> <br />
                    <label htmlFor='coffee-bean-roast-date'>Roasted on </label>
                    <input 
                        type='date'
                        name='roastDate'
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
                        <option value=''>--Select Grind Level--</option>
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
                        placeholder='Fahrenheit'
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
                    {this.renderHourTimerForColdBrew()}
                    <select 
                        type='number' 
                        name='minTime'
                        value={this.state.minTime} 
                        max='60'
                        onChange={this.handleOnChange}
                    >
                        <option value='0'>Minute(s)</option>
                        {this.renderNumOptions(59)}
                    </select> 
                    <select 
                        type='number' 
                        name='secTime'
                        value={this.state.secTime} 
                        max='60'
                        onChange={this.handleOnChange}
                        >
                        <option value='0'>Sec(s)</option>
                        {this.renderNumOptions(59)}
                    </select> <br />
                    <label htmlFor='time'>Bloom Time: </label> <br />
                    <select
                        type='number' 
                        name='bloomTime'
                        value={this.state.bloomTime} 
                        onChange={this.handleOnChange}
                    >
                        <option value='0'> Select Bloom Time </option>
                        {this.renderNumOptions(60)} 
                    </select> <br />
                    <label htmlFor='recipe-notes'>Notes</label>
                    <input
                        type='text'
                        name='notes'
                        placeholder='Tasting Notes, Changes to be made, etc'
                        value={this.state.notes}
                        onChange={this.handleOnChange}
                    />
                    <button type='submit'>Create Recipe</button>
                </form>
                <br/>
            <button onClick={() => this.props.return()}>Go Back To Recipes List</button>
            </div>
        )
    }
}

export default RecipeForm