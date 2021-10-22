import React from 'react'

const BrewMethod = ({props}) => {
    const equipmentArray =  props.equipment.split(",")
    const listOfEquipment = equipmentArray.map((equipment, index) => <li key={index}>{equipment}</li>)

        return (
            <div className='brew-method'>
                <h1>{props.id} - {props.name}</h1>
                <p>{props.description}</p>
                <h4>What You Need</h4>
                <ul>
                    {listOfEquipment}
                </ul>
            </div>
        )
}

export default BrewMethod