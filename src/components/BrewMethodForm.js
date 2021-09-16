import React, { Component } from 'react'

class BrewMethodForm extends Component {
    state = {
        name: '',
        description: '',
        equipment: '',
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
            description: this.state.description,
            equipment: '',
        }
        this.sendBrewMethodData(formData)
    }
    render() {
        return (
            <form className='brew-method-form' onSubmit={this.handleOnSubmit}>
                <label htmlFor='brew-method-name'>Brew Method: </label>
                <input 
                    type='text' 
                    value={this.state.name} 
                    onChange={this.handleOnChange} />
                <label htmlFor='brew-method-description'>Description: </label>
                <input 
                    type='text' 
                    value={this.state.description} 
                    onChange={this.handleOnChange} />
                <label htmlFor='brew-method-equipment'>Equipment: </label>
                <input 
                    type='text' 
                    value={this.state.equipment} 
                    onChange={this.handleOnChange} />
                <input  type='submit'> Create Brew Method </input>
            </form>
        )
    }
}

export default BrewMethodForm