import React from 'react'
import { Button } from 'react-bootstrap'

class BrewMethod extends React.Component {
    handleOnClick = () => {
        this.props.deleteBrewMethod(this.props.brew.id)
    }
    render() {
        const renderDeleteEditBtn = () => {
            if (this.props.brew.deletable === true) {
                return ( 
                <>
                    <Button variant='danger' size='sm' onClick={() => this.handleOnClick(this.props.brew.id)}>Delete</Button> 
                    {/* <button onClick='{props.editBrewMethod}'>Edit</button> */}
                </>
                )
            }
        }
        const equipmentArray =  this.props.brew.equipment.split(",")
        const listOfEquipment = equipmentArray.map((equipment, index) => <li key={index}>{equipment}</li>)
        
        return (
            <div className='brew-method'>
                <h1>{this.props.brew.id} - {this.props.brew.name}</h1>
                {renderDeleteEditBtn()}
                <p>{this.props.brew.description}</p>
                <h4>What You Need</h4>
                <ul>
                    {listOfEquipment}
                </ul>
            </div>
        )
    }
}


export default BrewMethod