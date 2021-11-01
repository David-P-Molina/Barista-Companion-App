import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'

class CoffeeBean extends React.Component {
    handleOnClick = () => {
        this.props.deleteCoffeeBean(this.props.coffeeBean.id)
    }
    render() {
        const {
            coffeeBean: { id, name, roaster_name, roast, description, notes, blend_type, region, processing_method, drying_method, elevation, deletable},
        } = this.props
        const valueExist = (value) =>  value ? value : "Not Available" 
        const renderDeleteEditBtn = () => {
            if (deletable === true) {
                return ( 
                <>
                    <Button variant='danger' size='sm' onClick={() => this.handleOnClick(id)}>Delete</Button> 
                    {/* <button onClick='{editCoffeeBean}'>Edit</button> */}
                </>
                )
            }
        }
        return (
            <div className='coffee-bean' id={id}>
                <Row>
                    <Col>
                        <h2>{name} by <i>{roaster_name}</i></h2>
                    </Col>
                    <Col>
                        {renderDeleteEditBtn()}
                    </Col>
                </Row>
                <Row>
                    <Col xs='auto'>
                        <p><b>Type: </b>{valueExist(blend_type)}</p>
                    </Col>
                    <Col xs='auto'>
                        <p><b>Region: </b>{valueExist(region)}</p>
                    </Col>
                    <Col xs='auto'>
                        <p><b>Tasting Notes: </b>{valueExist(notes)}</p>
                    </Col>
                </Row>
                <Row>
                    <p>{valueExist(description)}</p>
                </Row>
                <Row>
                    <Col xs='auto'>
                        <p><b>Roast Level:</b> {valueExist(roast)}</p>
                    </Col>
                    <Col xs='auto'>
                        <p><b>Drying Method:</b> {valueExist(drying_method)} </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs='auto'>
                        <p><b>Processing Method:</b> {valueExist(processing_method)} </p>
                    </Col>
                    <Col xs='auto'>
                        <p> <b>Elevation:</b> {valueExist(elevation)}</p>
                    </Col>
                </Row>
                <hr />
            </div>
        )
    }
}
export default CoffeeBean