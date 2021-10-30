import React from 'react' 
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import Error from './Error'

class RoasterForm extends React.Component {
    state = {
        name: '',
        description: '',
        yearFounded: '',
        website: '',
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
            year_founded: this.state.yearFounded,
            website: this.state.website,
            deletable: true,
        }
        this.props.addRoaster(formData)
        this.setState({
            name: '',
            description: '',
            yearFounded: '',
            website: '',
        })
    }
    render() {
        let currentYear = new Date().getFullYear()
        return(      
            <div>
                <Container>
                    <Row>
                        <Col md={{ span: 10, offset: 1}}>
                        <div className='form-background'>
                            <h1>Roaster Form</h1>
                            <p>With the Third Wave of coffee, there are now hundreds of amazing coffee roaster brands to try! Each one offering distinct beans sourced from all over the world. Have you found one that you like?  Fill out this form along with some of their coffee beans so other people can learn more about your most recent roaster obsession!</p>
                            <div className='errors'>
                                <Error errors={this.props.errors}/>
                            </div>
                        <Form className='roaster-form' onSubmit={this.handleOnSubmit} >
                            <Row>
                                <Col>
                                    <Form.Group className='mb-3'>    
                                        <Form.Label htmlFor='roaster-brand-name'>Name: </Form.Label>
                                        <Form.Control
                                            required type='text'
                                            name='name'
                                            placeholder='Ruby, Counter Culture, Heart, MadCap, etc.'
                                            value={this.state.name}
                                            onChange={this.handleOnChange}/>
                                        <Form.Text className='text-muted'>
                                            *required
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className='mb-3'>        
                                        <Form.Label htmlFor='roaster-description'>History: </Form.Label><br />
                                        <Form.Control
                                            required as='textarea'
                                            name='description'
                                            placeholder='Founded by, started at a cafe located at, etc.'
                                            value={this.state.description}
                                            onChange={this.handleOnChange}
                                            row={3}/>
                                        <Form.Text className='text-muted'>
                                            *required
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs='auto'>
                                    <Form.Group className='mb-3' >    
                                        <Form.Label htmlFor='roaster-year-founded'>Year Established/Founded: </Form.Label><br />
                                        <Form.Control
                                            type='number'
                                            name='yearFounded'
                                            min='1870'
                                            max={currentYear}
                                            placeholder='2010'
                                            value={this.state.yearFounded}
                                            onChange={this.handleOnChange}/>
                                        <Form.Text className='text-muted'>
                                                    *1870 to {currentYear}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className='mb-3'>    
                                        <Form.Label htmlFor='roaster-website'>Website: </Form.Label><br />
                                        <Form.Control
                                            type='url'
                                            name='website'
                                            placeholder='www.roaster-website-url.com'
                                            value={this.state.website}
                                            onChange={this.handleOnChange}/>
                                    </Form.Group>
                                </Col>
                            </Row><br />
                            <Row>
                                <Button mx='auto' variant='success' size='lg' type='submit'>Add Roaster</Button>
                            </Row>
                        </Form><br />
                        <Row>
                            <Button mx='auto' variant='secondary' size='sm' onClick={() => this.props.return()}>Roasters List</Button>
                        </Row>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default RoasterForm