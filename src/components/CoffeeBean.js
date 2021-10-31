import React from 'react'
import { Button } from 'react-bootstrap'

class CoffeeBean extends React.Component {
    handleOnClick = () => {
        this.props.deleteCoffeeBean(this.props.coffeeBean.id)
    }
    render() {
        const {
            coffeeBean: { id, name, roaster_name, roast, description, notes, blend_type, region, processing_method, drying_method, deletable},
            deleteCoffeeBean
        } = this.props
        const elevation = () =>  this.props.coffeeBean.elevation === null ? "Not Available" : this.props.coffeeBean.elevation
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
                <h1>{name} by <i>{roaster_name}</i></h1>
                {renderDeleteEditBtn()}
                <p>Type: {blend_type}</p>
                Region: {region} 
                <span>Tasting Notes: {notes}</span>
                <p>{description}</p>
                Drying Method: {drying_method} 
                Processing Method: {processing_method} 
                Roast Level: {roast} Elevation: {elevation()}
                <br />
            </div>
        )
    }
}
export default CoffeeBean