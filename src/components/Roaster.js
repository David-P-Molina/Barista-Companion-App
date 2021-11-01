import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

class Roaster extends React.Component {
    handleOnClick = () => {
        this.props.deleteRoaster(this.props.roaster.id)
    }
    render() {
        const {
            roaster: {id, name, description, year_founded, deletable, website}
        } = this.props
        const renderDeleteEditBtn = () => {
            if (deletable === true) {
                return ( 
                <>
                    <Button variant='danger' size='sm' onClick={() => this.handleOnClick(id)}>Delete</Button> 
                    {/* <button onClick='{editRoasterMethod}'>Edit</button> */}
                </>
                )
            }
        }
    return (
        <div className='roaster-card' id={id}>
            <Row>
                <Col xs='auto'>
                    <h1><a href={website} target='_blank' rel='noopener noreferrer'>{name}</a> - <i>{year_founded}</i></h1>
                </Col>
                <Col>
                    {renderDeleteEditBtn()}
                </Col>
            </Row>
            <Row>
                <p>{description}</p>
            </Row><br />
        </div>
    )
    }
}

export default Roaster
