import React, { Component } from 'react'
import { connect } from 'react-redux'

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
            equipment: this.state.equipment,
        }
        this.sendBrewMethodData(formData)//send to database?
        this.props.addBrewMethod(formData)//redux action
        this.setState({
            name: '',
            description: '',
            equipment: '',
        })
    }
    render() {
        return (
            <form className='brew-method-form' onSubmit={this.handleOnSubmit}>
                <label htmlFor='brew-method-name'>Brew Method: </label>
                <input 
                    type='text' 
                    name='name'
                    value={this.state.name} 
                    onChange={this.handleOnChange} />
                <label htmlFor='brew-method-description'>Description: </label>
                <input 
                    type='text' 
                    name='description'
                    value={this.state.description} 
                    onChange={this.handleOnChange} />
                <label htmlFor='brew-method-equipment'>Equipment: </label>
                <input 
                    type='text' 
                    name='equipment'
                    value={this.state.equipment} 
                    onChange={this.handleOnChange} />
                <input  type='submit'> Create Brew Method </input>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBrewMethod: (formData) => dispatch({ type: "ADD_BREW_METHOD", payload: formData })
    }
}

export default connect(null, mapDispatchToProps)(BrewMethodForm)