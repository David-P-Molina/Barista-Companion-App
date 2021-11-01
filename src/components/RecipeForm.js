import React, { Component } from 'react'
import { InputGroup, Container, Col, Row, Form, Button } from "react-bootstrap";
import Error from './Error'

class RecipeForm extends Component {
    state = {
        name: '',
        dateAttempted: '',
        brewMethod: '',
        coffeeBean: '',
        roastDate: '',
        grind: '',
        coffeeWeight: '',
        waterWeight: '',
        temperature: '',
        filter: '',
        wholeBean: '',
        hrTime: '0',
        minTime: '0',
        secTime: '0',
        bloomTime: '0',
        notes: '',
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    processBrewTime = (e) => {
        const brew = e.target.elements.brewMethod.value 
        return brew === '6' || brew === '10' ? (parseInt(this.state.hrTime) * 3600) + (parseInt(this.state.minTime) * 60) + parseInt(this.state.secTime) : (parseInt(this.state.minTime) * 60) + parseInt(this.state.secTime)
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        let formData = {
            name: this.state.name,
            date_attempted: this.state.dateAttempted,
            brew_method_id: this.state.brewMethod,
            coffee_bean_id: this.state.coffeeBean,
            roast_date: this.state.roastDate,
            grind: this.state.grind,
            coffee_in_grams: this.state.coffeeWeight,
            water_in_grams: this.state.waterWeight,
            temperature: this.state.temperature,
            filter: this.state.filter,
            wholeBean: this.state.wholeBean,
            time: this.processBrewTime(e),
            bloom_time: this.state.bloomTime,
            notes: this.state.notes,
            deletable: true,
        }
        this.props.addRecipe(formData)
        this.setState({
            name: '',
            dateAttempted: '',
            brewMethod: '',
            coffeeBean: '',
            roastDate: '',
            grind: '',
            coffeeWeight: '',
            waterWeight: '',
            temperature: '',
            filter: '',
            wholeBean: '',
            hrTime: '0',
            minTime: '0',
            secTime: '0',
            bloomTime: '0',
            notes: '',
        })
    }
    
    render() {
        const grindArray = ['Extra Coarse', 'Course', 'Medium Course', 'Medium', 'Medium Fine', 'Fine', 'Extra-Fine/Espresso']
        const displayArray = (array) => array.map((item) => <option key={item} value={item}>{item}</option>)
        const renderCoffeeBeans = () => {
            return (
                this.props.coffeeBeansList.map((b) => <option key={b.name} value={b.id}>{b.name} by {b.roaster_name} </option>)
                )
        }
        const renderNumOptions = (numbers) => {
            const numArray = []
            for (let i = 0; i <= numbers; i++) {
                numArray.push(i)
            }
            return numArray.map((number) => <option key={number} value={number}>{number}</option>)
        }
        const renderHourTimerForColdBrew = () => {
            if (this.state.brewMethod === "6" || this.state.brewMethod === "10") {
                return (
                    <Form.Select 
                        type='number' 
                        name='hrTime'
                        value={this.state.hrTime} 
                        max='24'
                        onChange={this.handleOnChange}
                     >
                        <option value='0'>Hour(s)</option>
                        {renderNumOptions(24)}
                    </Form.Select>
                )
            }
        }
        const renderBrewMethods = () => {
            return (
                this.props.brewMethodsList.map((brew) =>  <option key={brew.name} value={brew.id}>{brew.name}</option>)
            )
        }
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={{ span: 10, offset: 1 }}>
                        <div className='form-background'>
                            <h1>Create Recipe</h1>
                            <p>This is the place for experimenting with your coffee making skills! This is the place to nerd out about coffee, take note of any ways the coffee changes when you change the temperature, coffee/water ratio, level of grind, etc. use this form as a journal entry to remember what brewing techniques you've tried!</p>
                            <div className='errors'>
                                <Error errors={this.props.errors}/>
                            </div>
                            <Form className='recipe-form' onSubmit={this.handleOnSubmit}>
                                <Row>
                                    <Col xs={5}>
                                        <Form.Group>
                                            <Form.Label htmlFor='recipe-name'>Recipe Name: </Form.Label> <br />
                                            <Form.Control 
                                                required type='text'
                                                name='name'
                                                placeholder='Take 2, Use Different Filte etc.'
                                                value={this.state.name}
                                                onChange={this.handleOnChange}
                                                /> 
                                            <Form.Text className='text-muted'>
                                                *required
                                            </Form.Text>
                                        </Form.Group><br />
                                    </Col>
                                    <Col xs={3}>
                                        <Form.Group>
                                            <Form.Label htmlFor='date-recipe-attempted'>Brew Date: </Form.Label>
                                            <Form.Control 
                                                required type='date'
                                                name='dateAttempted'
                                                value={this.state.dateAttempted}
                                                onChange={this.handleOnChange}
                                            /> 
                                            <Form.Text className='text-muted'>
                                                *required
                                            </Form.Text>
                                        </Form.Group><br />
                                    </Col>
                                    <Col xs='auto'>
                                        <Form.Group>
                                            <Form.Label htmlFor='brew-method'>Brew Method: </Form.Label> <br />
                                            <Form.Select 
                                                required type='text' 
                                                name='brewMethod'
                                                value={this.state.brewMethod} 
                                                onChange={this.handleOnChange}
                                                >
                                                 <option value=''>Select a Brew Method</option>   
                                                {renderBrewMethods()}
                                            </Form.Select> 
                                            <Form.Text className='text-muted'>
                                                *required
                                            </Form.Text>
                                        </Form.Group><br />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                        <Form.Group>
                                            <Form.Label htmlFor='coffee-bean'>Coffee Bean: </Form.Label> <br />
                                            <Form.Select 
                                                required type='text' 
                                                name='coffeeBean'
                                                value={this.state.coffeeBean} 
                                                onChange={this.handleOnChange}
                                            >
                                                <option value=''>Select a Coffee Bean</option>
                                                {renderCoffeeBeans()}
                                            </Form.Select>  
                                            <Form.Text className='text-muted'>
                                                *required
                                            </Form.Text>
                                        </Form.Group> <br />
                                    </Col>
                                    <Col xs={3}>
                                        <Form.Group>
                                            <Form.Label htmlFor='coffee-bean-roast-date'>Roasted on </Form.Label>
                                            <Form.Control 
                                                required type='date'
                                                name='roastDate'
                                                value={this.state.roastDate}
                                                onChange={this.handleOnChange}/>  
                                            <Form.Text className='text-muted'>
                                                *required
                                            </Form.Text>
                                        </Form.Group><br />
                                    </Col>
                                    <Col xs='auto'>
                                        <Form.Group>
                                            <Form.Label htmlFor='grind'>Grind Size: </Form.Label> <br />
                                            <Form.Select
                                                required type='text' 
                                                name='grind'
                                                value={this.state.grind} 
                                                onChange={this.handleOnChange}>
                                                <option value=''>--Select Grind Level--</option>
                                                {displayArray(grindArray)}
                                            </Form.Select> 
                                            <Form.Text className='text-muted'>
                                                *required
                                            </Form.Text> 
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label htmlFor='coffee-weight'>Coffee Weight(g): </Form.Label> <br />
                                            <Form.Control 
                                                required type='number' 
                                                name='coffeeWeight'
                                                placeholder='grams'
                                                value={this.state.coffeeWeight} 
                                                onChange={this.handleOnChange}/>
                                            <Form.Text className='text-muted'>
                                                *required
                                            </Form.Text>
                                        </Form.Group> 
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label htmlFor='water-weight'>Water Weight(g): </Form.Label> <br />
                                            <Form.Control 
                                                required type='number' 
                                                name='waterWeight'
                                                placeholder='grams'
                                                value={this.state.waterWeight} 
                                                onChange={this.handleOnChange} />
                                            <Form.Text className='text-muted'>
                                                *required
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label htmlFor='temperature'>Temperature(°F): </Form.Label> <br />
                                            <Form.Control 
                                                required type='number' 
                                                name='temperature'
                                                placeholder='Fahrenheit'
                                                value={this.state.temperature} 
                                                onChange={this.handleOnChange}
                                            />  
                                            <Form.Text className='text-muted'>
                                                *required
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group htmlFor='wholebean-boolean'>
                                            <Form.Check
                                                label='Whole Bean'
                                                type='checkbox'
                                                name='wholeBean'
                                                value={this.state.wholeBean}
                                                onChange={this.handleOnChange}/> 
                                        </Form.Group>
                                        <Form.Group htmlFor='filter'>
                                            <Form.Check
                                                label='Filter'
                                                type='checkbox'
                                                name='filter'
                                                value={this.state.filter}
                                                onChange={this.handleOnChange}/> 
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <InputGroup>
                                        <InputGroup.Text>Brew Time: </InputGroup.Text>
                                            {renderHourTimerForColdBrew()}
                                            <Form.Select 
                                                type='number' 
                                                name='minTime'
                                                value={this.state.minTime} 
                                                max='60'
                                                onChange={this.handleOnChange}>
                                                <option value='0'>Minute(s)</option>
                                                {renderNumOptions(59)}
                                            </Form.Select>
                                            <Form.Select
                                                type='number' 
                                                name='secTime'
                                                value={this.state.secTime} 
                                                max='60'
                                                onChange={this.handleOnChange}
                                                >
                                                <option value='0'>Sec(s)</option>
                                                {renderNumOptions(59)}
                                            </Form.Select>
                                        </InputGroup>
                                    </Col>
                                    <Col xs='auto'>
                                        <InputGroup>
                                            <InputGroup.Text htmlFor='time'>Bloom Time: </InputGroup.Text>
                                            <Form.Select
                                                type='number' 
                                                name='bloomTime'
                                                value={this.state.bloomTime} 
                                                onChange={this.handleOnChange}>
                                                <option value='0'> Seconds </option>
                                                {renderNumOptions(60)} 
                                            </Form.Select> 
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label htmlFor='recipe-notes'>Notes</Form.Label>
                                            <Form.Control
                                                as='textarea'
                                                name='notes'
                                                placeholder='Tasting Notes, Changes to be made, etc'
                                                value={this.state.notes}
                                                onChange={this.handleOnChange}
                                                rows={3}/>
                                        </Form.Group><br />
                                    </Col>
                                </Row>
                                <Row>
                                    <Button mx='auto' variant='success' size='lg' type='submit'>Create Recipe</Button>
                                </Row> <br /> <br />
                            </Form>
                            <Row>    
                                <Button mx='auto' variant='secondary' size='sm' onClick={() => this.props.return()}>Go Back To Recipes</Button>
                            </Row>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default RecipeForm