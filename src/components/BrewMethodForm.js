import React, { Component } from 'react'
import { Container, Col, Row, Form, Button } from "react-bootstrap";
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
                    <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                            <div className='form-background'>
                                <h1>Brew Method Form</h1>
                                <p>Do you have a unique way of brewing coffee? Perhaps you brew using six filters, a sandwich bag, and a shoe! Fill out this form and add you'll have access to that brewing method in our recipes section!</p>
                                <span><i>*When filling out the equipment section please separate each item with a comma to display correctly.</i></span>
                                <div className='errors'>
                                    <Error errors={this.props.errors}/>
                            </div>
                            <Form className='brew-method-form' onSubmit={this.handleOnSubmit}>
                                    <Form.Group className="mb-3" controlId='formBrewMethodName'>
                                        <Form.Label htmlFor='brew-method-name'>Name: </Form.Label><br />
                                        <Form.Control 
                                            required type='text' 
                                            name='name'
                                            placeholder='Brewing Method'
                                            value={this.state.name} 
                                            onChange={this.handleOnChange} />
                                        <Form.Text className='text-muted'>
                                            *required
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId='formBrewMethodDescription'>
                                        <Form.Label htmlFor='brew-method-description'>Description: </Form.Label><br />
                                        <Form.Control
                                            required type='text' 
                                            name='description'
                                            placeholder='Description'
                                            value={this.state.description} 
                                            onChange={this.handleOnChange} />
                                        <Form.Text className='text-muted'>
                                            *required
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId='formBrewMethodEquipment'>
                                        <Form.Label htmlFor='brew-method-equipment'>Equipment: (Please Separate by ",")</Form.Label><br />
                                        <Form.Control 
                                            required type='text' 
                                            name='equipment'
                                            placeholder='List of equipment needed'
                                            value={this.state.equipment} 
                                            onChange={this.handleOnChange} />
                                        <Form.Text className='text-muted'>
                                            *required
                                        </Form.Text>
                                    </Form.Group>
                                    <Button variant='success' size='lg' type='submit'>Add Brew Method</Button>
                            </Form><br/>
                            <Button variant='secondary' size='sm' onClick={() => this.props.return()}>Go Back To Brew Methods</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default BrewMethodForm