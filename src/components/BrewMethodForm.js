import React, { Component } from 'react'
import Error from './Error'

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
            deletable: true,
        }
        this.props.addBrewMethod(formData)
        //setTimeout(() => this.updateState(), 10000)
        this.setState({
            name: '',
            description: '',
            equipment: '',
        })
    }
    updateState = () => {
        if (this.props.errors.length === 0) {
            return (
                this.setState({
                name: '',
                description: '',
                equipment: '',  
                }),
            this.props.return()
            )
        }
    }
    render() {
        return (
            <div>
                <h1>Add A New Brew Method</h1>
                <div className='errors'>
                    <Error errors={this.props.errors}/>
                </div>
            <form className='brew-method-form' onSubmit={this.handleOnSubmit}>
                <label htmlFor='brew-method-name'>Brew Method: </label><br />
                <input 
                    required type='text' 
                    name='name'
                    placeholder='Brewing Method'
                    value={this.state.name} 
                    onChange={this.handleOnChange} /><br />
                <label htmlFor='brew-method-description'>Description: </label><br />
                <input 
                    required type='text' 
                    name='description'
                    placeholder='Description'
                    value={this.state.description} 
                    onChange={this.handleOnChange} /><br />
                <label htmlFor='brew-method-equipment'>Equipment: (Please Separate by ",")</label><br />
                <input 
                    required type='text' 
                    name='equipment'
                    placeholder='List of equipment needed'
                    value={this.state.equipment} 
                    onChange={this.handleOnChange} /><br /><br />
                <button  type='submit'>Add Brew Method</button>
            </form>
            <br/>
            <button onClick={() => this.props.return()}>Go Back To Brew Methods</button>
            </div>
        )
    }
}

export default BrewMethodForm