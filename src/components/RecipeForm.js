import React, { Component } from 'react'
import { connect } from 'react-redux'

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
        let formData = {
            name: this.state.name ,
            brewMethod: this.state.brewMethod ,
            temperature: this.state.temperature ,
            waterWeight: this.state.waterWeight ,
            coffeeBean: this.state.coffeeBean ,
            grind: this.state.grind ,
            time: this.state.time ,
        }
        this.sendRecipeData(formData)
        this.props.addRecipe(formData)
        //Need to create send form data
        this.setState({
            name: '',
            brewMethod: '',
            temperature: '',
            waterWeight: '',
            coffeeBean: '',
            grind: '',
            time: '',
        })
    }

    render() {
        return (
            <div>
                <form className="recipe-form" onSubmit={this.handleOnSubmit}>
                    <label htmlFor="recipe-name">Recipe Name: </label> <br />
                    <input 
                        type="text" 
                        name='name'
                        value={this.state.name} 
                        onChange={this.handleOnChange}
                    /> <br />
                    <label htmlFor="brew-method">Brew Method: </label> <br />
                    <select 
                        type="text" 
                        name='brewMethod'
                        value={this.state.brewMethod} 
                        onChange={this.handleOnChange}
                    /> <br />
                    <label htmlFor="temperature">Temperature: </label> <br />
                    <input 
                        type="number" 
                        name='temperature'
                        value={this.state.temperature} 
                        onChange={this.handleOnChange}/> <br />
                    <label htmlFor="water-weight">Water Weight: </label> <br />
                    <input 
                        type="number" 
                        name='waterWeight'
                        value={this.state.waterWeight} 
                        onChange={this.handleOnChange}/> <br />
                    <label htmlFor="coffee-bean">Coffee Bean: </label> <br />
                    <input 
                        type="text" 
                        name='coffeeBean'
                        value={this.state.coffeeBean} 
                        onChange={this.handleOnChange}/> <br />
                    <label htmlFor="grind">Grind Size: </label> <br />
                    <option 
                        type="text" 
                        name='grind'
                        value={this.state.grind} 
                        onChange={this.handleOnChange}/> <br />
                    <label htmlFor="time">Brew Time: </label> <br />
                    <input 
                        type="time" 
                        name='time'
                        value={this.state.time} 
                        onChange={this.handleOnChange}/> <br />
                    <button type="submit">Create Recipe</button>
                </form>
            </div>
        )
    }
}

export default RecipeForm