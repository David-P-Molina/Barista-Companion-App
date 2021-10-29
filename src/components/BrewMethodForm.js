import React, { Component } from 'react'
import { Container, Col, Row, Jumbotron, Form, Button} from 'react-bootstrap'
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
                <Container>
                <h1>Brew Method Form</h1>
                <p>
                    Do you have a unique way of brewing coffee? 
                    Perhaps you brew using six filters, a sandwich bag, 
                    and a shoe! Fill out this form and add you'll have
                     access to that brewing method in our recipes section!
                </p>
                <span><i>*When filling out the equipment section please separate each item with a comma to display correctly.</i></span>
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
            </Container>
            </div>
        )
    }
}

export default BrewMethodForm