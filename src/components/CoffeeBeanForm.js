import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendCoffeeBeanDataAction } from '../actions/CoffeeBeanAction'

class CoffeeBeanForm extends Component {
    state = {
        name: '',
        roaster: '',
        roast: '',
        wholeBean: '',
        description: '',
        notes: '',
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
            roaster_id: this.state.roaster ,
            roast: this.state.roast ,
            whole_bean: this.state.wholeBean ,
            description: this.state.description ,
            notes: this.state.notes ,
        }
        this.sendCoffeeBeanDataWithDispatchFn(formData)
        //this.props.addCoffeeBean(formData)
        this.setState({
            name: '',
            roaster: '',
            userId: '',
            roast: '',
            wholeBean: '',
            description: '',
            notes: '',
        })
    }
    renderRoasters = () => {
        return this.props.roasters.map((roaster) => <option value={roaster.name}>{roaster.name}</option>)
    }
    render() {
        return (
            <div className='coffee-bean-form'>
                <form>
                    <label htmlFor='coffee-bean-name'>Name: </label>
                    <input 
                        type='text' 
                        name='name'
                        placeholder='Coffee Bean'
                        value={this.state.name} 
                        onChange={this.handleOnChange} />
                    <label htmlFor='roaster'>Roaster: </label>
                    <select 
                        name='roaster'
                        value={this.state.roaster} 
                        onChange={this.handleOnChange}>
                        {this.renderRoasters()}
                    </select>
                    <label htmlFor='roast-level'>Roast Level: </label>
                    <input 
                        type='select' 
                        name='roast'
                        value={this.state.roast} 
                        onChange={this.handleOnChange} />
                    <label htmlFor='whole-bean-boolean'>Whole Bean:</label>
                    <input 
                        type='checkbox' 
                        name='wholeBean'
                        value={this.state.wholeBean} 
                        onChange={this.handleOnChange} />
                    <label htmlFor='description'>Description: </label>
                    <input 
                        type='text' 
                        name='description'
                        placeholder='Story behind the bean'
                        value={this.state.description} 
                        onChange={this.handleOnChange}/>
                    <label htmlFor='notes'>Notes: </label>
                    <input 
                        type='text' 
                        name='notes'
                        placeholder='Hint of Lemon, Dark Chocolate, etc.'
                        value={this.state.notes} 
                        onChange={this.handleOnChange}/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatchFn) => {
    return {
        sendCoffeeBeanDataWithDispatchFn: (data) => dispatchFn(sendCoffeeBeanDataAction(data))
    }
}
export default connect(null, mapDispatchToProps)(CoffeeBeanForm)
