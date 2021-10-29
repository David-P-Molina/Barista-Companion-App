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
                        <Col md={{ span: 8, offset: 2}}>
                        <div className='form-background'>
                            <h1>Roaster Form</h1>
                            <p>With the Third Wave of coffee there are now hundreds of amazing coffee roaster brands to try! Each one offering distinct beans sourced from all over the world. Have you found one that you like?  Fill out this form along with some of their coffee beans so other people can learn more about your most recent roaster obsession!</p>
                            <div className='errors'>
                                <Error errors={this.props.errors}/>
                            </div>
                        <Form className='roaster-form' onSubmit={this.handleOnSubmit} >
                            <Form.Group classname='mb-3' controlId='formRoasterName'>    
                                <Form.Label htmlFor='roaster-brand-name'>Name: </Form.Label>
                                <Form.Control
                                    required type='text'
                                    name='name'
                                    placeholder='Brand Name'
                                    value={this.state.name}
                                    onChange={this.handleOnChange}/>
                                <Form.Text className='text-muted'>
                                    *required
                                </Form.Text>
                            </Form.Group>
                            <Form.Group classname='mb-3' controlId='formRoasterHistory'>        
                                <Form.Label htmlFor='roaster-description'>History: </Form.Label><br />
                                <Form.Control
                                    required type='text'
                                    name='description'
                                    placeholder='History of Brand'
                                    value={this.state.description}
                                    onChange={this.handleOnChange}/>
                                <Form.Text className='text-muted'>
                                    *required
                                </Form.Text>
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group classname='mb-3' controlId='formYearFounded'>    
                                        <Form.Label htmlFor='roaster-year-founded'>Year Established/Founded: </Form.Label><br />
                                        <Form.Control
                                            type='number'
                                            name='yearFounded'
                                            min='1870'
                                            max={currentYear}
                                            value={this.state.yearFounded}
                                            onChange={this.handleOnChange}/>
                                        <Form.Text className='text-muted'>
                                                    *1870 to {currentYear}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group classname='mb-3' controlId='formWebsite'>    
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
                            <Button variant='success' size='lg' type='submit'>Add Roaster</Button>
                        </Form><br />
                        <Button variant='secondary' size='sm' onClick={() => this.props.return()}>Go Back To Roasters</Button>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default RoasterForm