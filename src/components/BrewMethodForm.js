import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { sendBrewMethodDataAction } from '../actions/BrewActions'

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
        this.props.sendBrewMethodDataWithDispatchFn(formData)//send to database? Goes into action
        this.setState({
            name: '',
            description: '',
            equipment: '',
        })
    }
    render() {
        return (
            <div>
                <h1>Add A New Brew Method</h1>
            <form className='brew-method-form' onSubmit={this.handleOnSubmit}>
                <label htmlFor='brew-method-name'>Brew Method: </label><br />
                <input 
                    required type='text' 
                    name='name'
                    required='required'
                    placeholder='Brewing Method'
                    value={this.state.name} 
                    onChange={this.handleOnChange} /><br />
                <label htmlFor='brew-method-description'>Description: </label><br />
                <input 
                    required type='text' 
                    name='description'
                    placeholder='Description'
                    required='required'
                    value={this.state.description} 
                    onChange={this.handleOnChange} /><br />
                <label htmlFor='brew-method-equipment'>Equipment: (Separated by ", ")</label><br />
                <input 
                    required type='text' 
                    name='equipment'
                    placeholder='List of equipment needed'
                    required='required'
                    value={this.state.equipment} 
                    onChange={this.handleOnChange} /><br /><br />
                <button  type='submit'>Add Brew Method</button>
            </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatchFn) => {
    return {
        sendBrewMethodDataWithDispatchFn: (data) => dispatchFn(sendBrewMethodDataAction(data))
    }
}
export default connect(null, mapDispatchToProps)(BrewMethodForm)
//mapDispatchToProps gives action creator access to dispatch functionality//adds a copy of an action creator w/
//dispatch adds to the properties of the component