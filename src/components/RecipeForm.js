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
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={}/>
                <input type="text" value={this.state.brewMethod} onChange={}/>
                <input type="number" value={this.state.temperature} onChange={}/>
                <input type="number" value={this.state.waterWeight} onChange={}/>
                <input type="text" value={this.state.coffeeBean} onChange={}/>
                <input type="text" value={this.state.grind} onChange={}/>
                <input type="time" value={this.state.time} onChange={}/>
            </input>
        )
    }
}
export default RecipeForm