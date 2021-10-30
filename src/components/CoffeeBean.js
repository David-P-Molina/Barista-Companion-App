import React from 'react'
import { Button } from 'react-bootstrap'

class CoffeeBean extends React.Component {
    handleOnClick = () => {
        this.props.deleteCoffeeBean(this.props.coffeeBean.id)
    }
    render() {
        const renderDeleteEditBtn = () => {
            if (this.props.coffeeBean.deletable === true) {
                return ( 
                <>
                    <Button variant='danger' size='sm' onClick={() => this.handleOnClick(this.props.coffeeBean.id)}>Delete</Button> 
                    {/* <button onClick='{this.props.coffeeBean.editCoffeeBean}'>Edit</button> */}
                </>
                )
            }
        }
        return (
            <div className='coffee-bean' id={this.props.coffeeBean.id}>
                <h1>{this.props.coffeeBean.name} by <i>{this.props.coffeeBean.roaster_name}</i></h1>
                {renderDeleteEditBtn()}
                <p>Type: {this.props.coffeeBean.blend_type}</p>
                Region: {this.props.coffeeBean.region} 
                <span>Tasting Notes: {this.props.coffeeBean.notes}</span>
                <p>{this.props.coffeeBean.description}</p>
                Drying Method: {this.props.coffeeBean.drying_method} 
                Processing Method: {this.props.coffeeBean.processing_method} 
                Roast Level: {this.props.coffeeBean.roast} 
            </div>
        )
    }
}
export default CoffeeBean