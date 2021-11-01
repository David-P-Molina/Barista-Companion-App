import React from 'react'
import {Row, Col, Button } from 'react-bootstrap'

class BrewMethod extends React.Component {
    handleOnClick = () => {
        this.props.deleteBrewMethod(this.props.brew.id)
    }
    render() {
        const {
            brew: { id, name, description, equipment, deletable}
        } = this.props
        const renderDeleteEditBtn = () => {
            if (deletable === true) {
                return ( 
                <>
                    <Button variant='danger' size='sm' onClick={() => this.handleOnClick(id)}>Delete</Button> 
                    {/* <button onClick='{props.editBrewMethod}'>Edit</button> */}
                </>
                )
            }
        }
        const equipmentArray =  equipment.split(",")
        const listOfEquipment = equipmentArray.map((equipment, index) => <Col xs='auto' key={index}>{equipment}</Col>)
        
        return (
            <div className='brew-method'>
                <Row>
                    <Col xs='auto'>
                        <h1>{name}</h1>
                    </Col>
                    <Col xs={1}>
                        {renderDeleteEditBtn()}
                    </Col>
                </Row>
                <Row>
                    <p>{description}</p>
                </Row>
                <h4>What You Need</h4>
                <Row>
                    {listOfEquipment}
                </Row><hr />
            </div>
        )
    }
}


export default BrewMethod