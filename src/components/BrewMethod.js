import React from 'react'

class BrewMethod extends React.Component {
    handleOnClick = () => {
        this.props.deleteBrewMethod(this.props.brew.id)
    }
    render() {
        const equipmentArray =  this.props.brew.equipment.split(",")
        const listOfEquipment = equipmentArray.map((equipment, index) => <li key={index}>{equipment}</li>)
        
        return (
            <div className='brew-method'>
                <h1>{this.props.brew.id} - {this.props.brew.name}</h1>
                <p>{this.props.brew.description}</p>
                <h4>What You Need</h4>
                <ul>
                    {listOfEquipment}
                </ul>
                <button onClick={this.handleOnClick}>x</button>
            </div>
        )
    }
}


export default BrewMethod