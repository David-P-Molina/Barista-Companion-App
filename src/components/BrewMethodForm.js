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
            <form>
                
            </form>
        )
    }
}

export default BrewMethodForm