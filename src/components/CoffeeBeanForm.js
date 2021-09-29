import React, { Component } from 'react'

class CoffeeBeanForm extends Component {
    state = {
        name: '',
        roaster: '',
        userId: '',
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
            roaster: this.state.roaster ,
            userId: this.state.userId ,
            roast: this.state.roast ,
            wholeBean: this.state.wholeBean ,
            description: this.state.description ,
            notes: this.state.notes ,
        }
        this.sendCoffeeBeanData(formData)
        this.props.addCoffeeBean(formData)
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
    render() {
        return (
            <div className='coffee-bean-form'>
                <form>
                    <label htmlFor='coffee-bean-name'>Name: </label>
                    <input 
                        type='text' 
                        name='name'
                        value={this.state.name} 
                        onChange={this.handleOnChange} />
                    <label htmlFor='roaster'>Roaster: </label>
                    <input 
                        type='select' 
                        name='roaster'
                        value={this.state.roaster} 
                        onChange={this.handleOnChange} />
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
                        value={this.state.description} 
                        onChange={this.handleOnChange}/>
                    <label htmlFor='notes'>Notes: </label>
                    <input 
                        type='text' 
                        name='notes'
                        value={this.state.notes} 
                        onChange={this.handleOnChange}/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default CoffeeBeanForm
