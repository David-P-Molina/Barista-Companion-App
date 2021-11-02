import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'

class Recipe extends React.Component {
    state = {
        clicked: false
    }
    handleOnClick = () => {
        this.props.deleteRecipe(this.props.recipe.id)
    }
    handleLike = () => {
        this.state.clicked === false ? this.setState({clicked: true}) : this.setState({clicked: false})
    }
    
    render() {
        const {
            recipe: { id, name, date_attempted, whole_bean, brew_method_name, coffee_bean_name, roaster_name, roast_date, grind, coffee_in_grams, water_in_grams, temperature, filter, time, bloom_time, notes, deletable}
        } = this.props
        const valueExist = (value) =>  value ? value : "Not Available" 
        const renderDeleteEditBtn = () => {
            if (deletable === true) {
                return ( 
                <>
                    <Button variant='danger' size='sm' onClick={() => this.handleOnClick(id)}>Delete</Button> 
                    {/* <button onClick='{props.editRecipeMethod}'>Edit</button> */}
                </>
                )
            }
        }
        const ratio = () => (water_in_grams / coffee_in_grams).toFixed(1) 
        const filterBoolean = () => filter ? "Filter Used" : "No Filter Used"
        const wholeBean = () => whole_bean ? "Whole Bean" : "Pre-Ground"
        const convertTime = (num) => {
            if( num === '0' ) {
                return 'Not Available'
            } else {
                const hours = Math.floor(num / 3600)
                const minutes = Math.floor(num % 3600 / 60)
                const seconds = Math.floor(num % 3600 % 60)
                if (hours > 0) {
                    return hours + ' hr ' + minutes + ' min ' + seconds + ' sec '
                } else if (hours === 0 && minutes === 0) {
                    return seconds + ' sec'
                } else if (hours === 0 && seconds === 0) {
                    return minutes + ' min '
                } else {
                    return minutes + ' min ' + seconds + ' sec ' 
                }
            }
        }
        const renderHeart = () => {
          return this.state.clicked ?  "<3" : ''
        }

        return (
            <div className='recipe' >
                <Row>
                    <Col xs='auto'>
                        <h2>{name}  <i>{date_attempted}</i></h2> 
                    </Col>
                    <Col xs='auto'>
                        {renderDeleteEditBtn()}
                    </Col>
                    {renderHeart()}
                    <button onClick={this.handleLike}>Like</button>
                </Row>
                <Row>
                    <Col xs='auto'>
                        <h5>{coffee_bean_name} by <i>{roaster_name}</i> </h5>
                    </Col>
                    <Col>
                    <p><b>Grind Consistency:</b> {grind} - {wholeBean()}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs='auto'>
                        <p><b>Brew Method: </b><i>{brew_method_name}</i> - {filterBoolean()}</p>
                    </Col>
                    <Col xs='auto'>
                        <p><b>Roast Date:</b> {roast_date}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs='auto'>
                    <p><b>Coffee Weight:</b> {coffee_in_grams} grams</p>
                    </Col>
                    <Col xs='auto'>
                    <p><b>Water:</b> {water_in_grams} grams</p>
                    </Col>
                    <Col xs='auto'>
                    <b><p>{temperature} °F</p></b>
                    </Col>
                    <Col xs='auto'>
                    <p><b>Ratio:</b> 1 gram Water / {ratio()} grams Coffee </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs='auto'>
                        <p><b>Brew Time:</b> {convertTime(time)}</p>
                    </Col>
                    <Col xs='auto'>
                        <p><b>Bloom Time:</b>{convertTime(bloom_time)}</p>
                    </Col>
                </Row>
            <Row>
                <Col xs='auto'>
                    <p><b>Feedback/Tasting Notes:</b> {valueExist(notes)}</p>
                </Col>
            </Row><hr />
        </div>
    )
 }
}

export default Recipe