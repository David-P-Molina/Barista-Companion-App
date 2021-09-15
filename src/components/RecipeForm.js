import React, { Component } from 'react'

class RecipeForm extends Component {
    state = {
        name: '',
        brewMethod: '',
        temperature: '',
        waterWeight: '',
        coffeeBean: '',
        grind: '',
        time: '',
    }
    handleOnChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        //createsubmission
    }

    render() {
        return (
            <div>
                <form className="recipe-form" onSubmit={this.handleOnSubmit}>
                    <label htmlFor="recipe-name">Recipe Name: </label>
                    <input type="text" value={this.state.name} onChange={this.handleOnChange}/>
                    <label htmlFor="brew-method">Brew Method: </label>
                    <input type="text" value={this.state.brewMethod} onChange={this.handleOnChange}/>
                    <label htmlFor="temperature">Temperature: </label>
                    <input type="number" value={this.state.temperature} onChange={this.handleOnChange}/>
                    <label htmlFor="water-weight">Water Weight: </label>
                    <input type="number" value={this.state.waterWeight} onChange={this.handleOnChange}/>
                    <label htmlFor="coffee-bean">Coffee Bean: </label>
                    <input type="text" value={this.state.coffeeBean} onChange={this.handleOnChange}/>
                    <label htmlFor="grind">Grind Size: </label>
                    <input type="text" value={this.state.grind} onChange={this.handleOnChange}/>
                    <label htmlFor="time">Brew Time: </label>
                    <input type="time" value={this.state.time} onChange={this.handleOnChange}/>
                </form>
            </div>
        )
    }
}
export default RecipeForm