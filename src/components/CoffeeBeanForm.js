import React, { Component } from 'react'

class CoffeeBeanForm extends Component {
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className='coffee-bean-form'>
                <form>
                    <label htmlFor='coffee-bean-name'>Name: </label>
                    <input type='text' value={this.handleOnChange}>
                    <label htmlFor='roaster'>Roaster: </label>
                    <input type='select' value={this.handleOnChange} />
                    <label htmlFor='roast-level'>Roast Level: </label>
                    <input type='select' value={this.handleOnChange} />
                    <label htmlFor='whole-bean-boolean'>Whole Bean:</label>
                    <input type='checkbox' value={this.handleOnChange} />
                    <input type='submit' />
                </form>
                (:name, :roaster_id, :user_id, :roast, :whole_bean, :description, :notes)
    end
            </div>
        )
    }
}

export default CoffeeBeanForm
