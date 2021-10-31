import React from 'react'
import { Button } from 'react-bootstrap'

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
        const listOfEquipment = equipmentArray.map((equipment, index) => <li key={index}>{equipment}</li>)
        
        return (
            <div className='brew-method'>
                <h1>{id} - {name}</h1>
                {renderDeleteEditBtn()}
                <p>{description}</p>
                <h4>What You Need</h4>
                <ul>
                    {listOfEquipment}
                </ul>
            </div>
        )
    }
}


export default BrewMethod