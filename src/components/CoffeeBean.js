import React, { Component } from 'react'

class CoffeeBean extends Component {
    render() {
        return (
            <div>
                <h1>
                {this.props.name} - {this.props.roasters.name}
                </h1>
                {this.props.description}
            </div>
        )
    }
}
export default CoffeeBean