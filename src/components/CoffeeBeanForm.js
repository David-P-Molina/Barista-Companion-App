import React, { Component } from 'react'

class CoffeeBeanForm extends Component {
    (:name, :roaster_id, :user_id, :roast, :whole_bean, :description, :notes)
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
            [e.target.name]: e.target.value={this.state.} onChange
        })
    }
    render() {
        return (
            <div className='coffee-bean-form'>
                <form>
                    <label htmlFor='coffee-bean-name'>Name: </label>
                    <input type='text' value={this.state.name} onChange={this.handleOnChange} />
                    <label htmlFor='roaster'>Roaster: </label>
                    <input type='select' value={this.state.roaster} onChange={this.handleOnChange} />
                    <label htmlFor='roast-level'>Roast Level: </label>
                    <input type='select' value={this.state.roast} onChange={this.handleOnChange} />
                    <label htmlFor='whole-bean-boolean'>Whole Bean:</label>
                    <input type='checkbox' value={this.state.wholeBean} onChange={this.handleOnChange} />
                    <label htmlFor='description'>Description: </label>
                    <input type='text' value={this.state.description} onChange={this.handleOnChange}/>
                    <label htmlFor='notes'>Notes: </label>
                    <input type='text' value={this.state.notes} onChange={this.handleOnChange}/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default CoffeeBeanForm
