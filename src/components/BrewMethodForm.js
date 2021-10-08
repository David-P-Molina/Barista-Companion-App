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
        //this.props.addBrewMethod(formData)//redux action//can pass this.state too//abstract to action.js 
        this.setState({
            name: '',
            description: '',
            equipment: '',
        })
    }
    render() {
        debugger
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

const mapDispatchToProps = (dispatchFn) => {
    return {
        sendBrewMethodDataWithDispatchFn: (data) => dispatchFn(sendBrewMethodDataAction(data))
    }
}
export default connect(null, mapDispatchToProps)(BrewMethodForm)
//mapDispatchToProps gives action creator access to dispatch functionality//adds a copy of an action creator w/
//dispatch adds to the properties of the component