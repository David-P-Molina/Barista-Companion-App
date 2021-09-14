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

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.handleOnChange}/>
                <input type="text" value={this.state.brewMethod} onChange={this.handleOnChange}/>
                <input type="number" value={this.state.temperature} onChange={this.handleOnChange}/>
                <input type="number" value={this.state.waterWeight} onChange={this.handleOnChange}/>
                <input type="text" value={this.state.coffeeBean} onChange={this.handleOnChange}/>
                <input type="text" value={this.state.grind} onChange={this.handleOnChange}/>
                <input type="time" value={this.state.time} onChange={this.handleOnChange}/>
            </input>
        )
    }
}
export default RecipeForm