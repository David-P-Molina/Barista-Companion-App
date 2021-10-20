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
        return this.props.roastersList.map((roaster) => <option key={roaster.id} value={roaster.id}>{roaster.name}</option>)
    }
    render() {
        return (
            <div>
                <h1>Create Coffee Bean Information</h1>
                <form className='coffee-bean-form' onSubmit={this.handleOnSubmit}>
                    <label htmlFor='coffee-bean-name'>Name: </label> <br />
                    <input 
                        type='text' 
                        name='name'
                        placeholder='Coffee Bean'
                        value={this.state.name} 
                        onChange={this.handleOnChange} /> <br />
                    <label htmlFor='roaster'>Roaster: </label>
                    <select 
                        type='text'
                        name='roaster'
                        value={this.state.roaster} 
                        onChange={this.handleOnChange}
                        >
                            <option>Select a Roaster From List</option>
                        {this.renderRoasters()}
                    </select> <br />
                    <label htmlFor='roast-level'>Roast Level: </label><br />
                    <select 
                        type='select' 
                        name='roast'
                        value={this.state.roast} 
                        onChange={this.handleOnChange}>
                            <option value=''>Select Roast Level: </option>
                            <option value='Blonde Roast'>Blonde Roast</option>
                            <option value='Light/ City Roast'>Light/ City Roast</option>
                            <option value='Light-Medium/ City +'>Light-Medium/ City +</option>
                            <option value='Medium/ Full City'>Medium/ Full City</option>
                            <option value='Medium-Dark/ Full City +'>Medium-Dark/ Full City +</option>
                            <option value='Dark Roast/ Vienna-French'>Dark Roast/ Vienna-French</option>
                    </select> <br />
                    <label htmlFor='whole-bean-boolean'>Whole Bean: </label>
                    <input 
                        type='checkbox' 
                        name='wholeBean'
                        value={this.state.wholeBean} 
                        onChange={this.handleOnChange} /><br />
                    <label htmlFor='description'>Description: </label><br />
                    <input 
                        type='text' 
                        name='description'
                        placeholder='Story behind the bean'
                        value={this.state.description} 
                        onChange={this.handleOnChange}/><br />
                    <label htmlFor='notes'>Notes: </label><br />
                    <input 
                        type='text' 
                        name='notes'
                        placeholder='Hint of Lemon, Dark Chocolate, etc.'
                        value={this.state.notes} 
                        onChange={this.handleOnChange}/><br /><br />
                    <button type='submit'>Add Coffee Bean</button>
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
