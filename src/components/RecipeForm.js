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
                    <label htmlFor="recipe-name">Recipe Name: </label> <br />
                    <input type="text" value={this.state.name} onChange={this.handleOnChange}/> <br />
                    <label htmlFor="brew-method">Brew Method: </label> <br />
                    <input type="text" value={this.state.brewMethod} onChange={this.handleOnChange}/> <br />
                    <label htmlFor="temperature">Temperature: </label> <br />
                    <input type="number" value={this.state.temperature} onChange={this.handleOnChange}/> <br />
                    <label htmlFor="water-weight">Water Weight: </label> <br />
                    <input type="number" value={this.state.waterWeight} onChange={this.handleOnChange}/> <br />
                    <label htmlFor="coffee-bean">Coffee Bean: </label> <br />
                    <input type="text" value={this.state.coffeeBean} onChange={this.handleOnChange}/> <br />
                    <label htmlFor="grind">Grind Size: </label> <br />
                    <input type="text" value={this.state.grind} onChange={this.handleOnChange}/> <br />
                    <label htmlFor="time">Brew Time: </label> <br />
                    <input type="time" value={this.state.time} onChange={this.handleOnChange}/> <br />
                    <button type="submit">Create Recipe</button>
                </form>
            </div>
        )
    }
}
export default RecipeForm