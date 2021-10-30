import React, { Component } from 'react'
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import Error from './Error'

class CoffeeBeanForm extends Component {
    state = {
        name: '',
        roaster: '',
        roast: '',
        wholeBean: '',
        description: '',
        notes: '',
        blendType: '',
        region: '',
        processingMethod: '',
        dryingMethod: '',
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
            // whole_bean: this.state.wholeBean ,
            description: this.state.description ,
            notes: this.state.notes ,
            blend_type: this.state.blendType,
            region: this.state.region,
            processing_method: this.state.processingMethod,
            drying_method: this.state.dryingMethod,
            deletable: true,
        }
        this.props.addCoffeeBean(formData)
        this.setState({
            name: '',
            roaster: '',
            roast: '',
            // wholeBean: '',
            description: '',
            notes: '',
            blendType: '',
            region: '',
            processingMethod: '',
            dryingMethod: '',
        })
    }
    renderRoasters = () => {
        return this.props.roastersList.map((roaster) => <option key={roaster.name} value={roaster.id}>{roaster.name}</option>)
    }
    renderRoastLevels = () => {
        const roastArray = ['Blonde Roast', 'Light/ City Roast', 'Light-Medium/ City +', 'Medium/ Full City', 'Medium-Dark/ Full City +', 'Dark Roast/ Vienna-French']
        return roastArray.map((r) => <option key={r} value={r}>{r}</option>)
    }
    renderBlendType = () => {
        const blendsArray = ["Espresso", "Single-Origin", "Blend", "Decaf", "Decaf Espresso"]
        return blendsArray.map((blend) => <option key={blend} value={blend}>{blend}</option>)
    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={{ span: 10, offset: 1 }}>
                            <div className='form-background'>
                                <h1>Coffee Bean Form</h1>
                                <p>Every Coffee Bean has a story, starting with it's origins, how it is harvested, by who, how do they prepare the coffee for sale, etc. This is the place to add as much or as little information about a coffee bean as you like.</p>
                                <span><i>*If you do not find the roaster you are looking for please go to the <a href='/roasters/new'>Roaster Form</a> and add it first!</i></span>
                                <div className='errors'>
                                    <Error errors={this.props.errors}/>
                                </div>
                            <Form className='coffee-bean-form' onSubmit={this.handleOnSubmit}>
                            <Row>
                                <Col xs={7}>
                                    <Form.Group>
                                        <Form.Label htmlFor='coffee-bean-name'>Name: </Form.Label> <br />
                                        <Form.Control 
                                        required type='text' 
                                        name='name'
                                        placeholder='Coffee Bean'
                                        value={this.state.name} 
                                        onChange={this.handleOnChange} />
                                    <Form.Text className='text-muted'>
                                        *required
                                    </Form.Text>
                                    </Form.Group> 
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label htmlFor='roaster'>Roaster: </Form.Label>
                                        <Form.Select 
                                            type='text'
                                            name='roaster'
                                            value={this.state.roaster} 
                                            onChange={this.handleOnChange}>
                                                <option value=''>Select a Roaster From List</option>
                                            {this.renderRoasters()}
                                        </Form.Select>
                                        <Form.Text className='text-muted'>
                                            *required
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs='auto'>
                                    <Form.Group>
                                        <Form.Label htmlFor='blend-type'>Blend Type: </Form.Label>
                                        <Form.Select
                                            name='blendType'
                                            value={this.state.blendType}
                                            onChange={this.handleOnChange}>
                                            <option value=''>Select Blend Type</option>
                                            {this.renderBlendType()}
                                            </Form.Select> 
                                    </Form.Group>
                                </Col>
                                <Col >
                                    <Form.Group>
                                        <Form.Label htmlFor='roast-level'>Roast Level: </Form.Label><br />
                                        <Form.Select 
                                            type='select' 
                                            name='roast'
                                            value={this.state.roast} 
                                            onChange={this.handleOnChange}>
                                            <option value=''>Select Roast Level: </option>
                                            {this.renderRoastLevels()}
                                        </Form.Select>
                                    </Form.Group> 
                                </Col>
                            </Row>
                            <Row>
                                    {/* <Col><br />
                                <Form.Group controlId='formWholeBean'>
                                    <Form.Check 
                                        label='Whole Bean'
                                        type='checkbox' 
                                        name='wholeBean'
                                        value={this.state.wholeBean} 
                                        onChange={this.handleOnChange} />
                                </Form.Group>
                                </Col> */}
                                <Col>
                                    <Form.Group>
                                        <Form.Label htmlFor='processing-method'>Processing Method: </Form.Label>
                                        <Form.Control 
                                            type='text' 
                                            placeholder='Natural, Washed, Wet-Hulled, etc.'
                                            name='processingMethod'
                                            value={this.state.processingMethod} 
                                            onChange={this.handleOnChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label htmlFor='drying-method'>Drying Method: </Form.Label>
                                        <Form.Control 
                                            type='text' 
                                            placeholder='Raised Bed, Mechanical Dryer, etc.'
                                            name='dryingMethod'
                                            value={this.state.dryingMethod} 
                                            onChange={this.handleOnChange} />
                                    </Form.Group>
                                </Col><br /> 
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label htmlFor='region'>Region: </Form.Label>
                                        <Form.Control 
                                            type='text' 
                                            name='region'
                                            placeholder='Costa Rica, Ethiopia, Yirgacheffe, etc.'
                                            value={this.state.region} 
                                            onChange={this.handleOnChange} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>   
                                        <Form.Label htmlFor='description'>Description: </Form.Label><br />
                                        <Form.Control 
                                            as='textarea' 
                                            name='description'
                                            placeholder='Story behind the bean.'
                                            value={this.state.description} 
                                            onChange={this.handleOnChange}
                                            rows={3}
                                            />
                                            <Form.Text className='text-muted'>
                                            *required
                                        </Form.Text>
                                </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Form.Group>
                                    <Form.Label htmlFor='notes'>Tasting Notes: </Form.Label><br />
                                    <Form.Control 
                                        type='text' 
                                        name='notes'
                                        placeholder='Hint of Lemon, Dark Chocolate, etc.'
                                        value={this.state.notes} 
                                        onChange={this.handleOnChange}/>
                                </Form.Group><br />
                                </Col>
                            </Row>
                            <Row>
                                <Button mx='auto' variant='success' size='lg' type='submit'>Add Coffee Bean</Button>
                            </Row>
                            </Form><br />
                            <Row>
                                <Button mx='auto' variant='secondary' size='sm' onClick={() => this.props.return()}>Coffee Beans List</Button>
                            </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CoffeeBeanForm
