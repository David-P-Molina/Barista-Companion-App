import React from 'react'

class CoffeeBean extends React.Component {
    handleOnClick = () => {
        this.props.deleteCoffeeBean(this.props.coffeeBean.id)
    }
    render() {
        const renderDeleteEditBtn = () => {
            if (this.props.coffeeBean.deletable === false) {
                return ( 
                <>
                    <button onClick={() => this.handleOnClick(this.props.coffeeBean.id)}>Delete</button> 
                    {/* <button onClick='{this.props.coffeeBean.editCoffeeBean}'>Edit</button> */}
                </>
                )
            }
        }
        return (
            <div className='coffee-bean' id={this.props.coffeeBean.id}>
                {renderDeleteEditBtn()}
                <h1>{this.props.coffeeBean.name} by <i>{this.props.coffeeBean.roaster_name}</i></h1>
                <p>Type: {this.props.coffeeBean.blend_type}</p>
                Region: {this.props.coffeeBean.region} 
                <span>Tasting Notes: {this.props.coffeeBean.notes}</span>
                <p>{this.props.coffeeBean.description}</p>
                Drying Method: {this.props.coffeeBean.drying_method} 
                Processing Method: {this.props.coffeeBean.processing_method} 
                Roast Level: {this.props.coffeeBean.roast} {this.props.coffeeBean.whole_bean}
            </div>
        )
    }
}
export default CoffeeBean