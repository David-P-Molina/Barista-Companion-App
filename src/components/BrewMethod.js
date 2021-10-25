import React from 'react'

const BrewMethod = ({props}) => {
    handleOnClick() {
        this.props.deleteBrewMethod(props.id)
    }
    const renderDeleteEditBtn = () => {
        if (props.deletable === false) {
            return ( 
            <>
                <button onClick={() => this.handleOnClick(props.id)}>Delete</button> 
                {/* <button onClick='{props.editBrewMethod}'>Edit</button> */}
            </>
            )
        }
    }
    const equipmentArray =  props.equipment.split(",")
    const listOfEquipment = equipmentArray.map((equipment, index) => <li key={index}>{equipment}</li>)

        return (
            <div className='brew-method' id={props.id}>
                <h1>{props.id} - {props.name}</h1>
                <div className='edit--delete-buttons'>{renderDeleteEditBtn(props.id)}</div>
                <p>{props.description}</p>
                <h4>What You Need</h4>
                <ul>
                    {listOfEquipment}
                </ul>
            </div>
        )
}

export default BrewMethod