import React, { Component } from 'react'

class BrewMethod extends Component {
    render() {
        return (
            <div classname='brew-method'>
                <h1>{this.props.brewMethod.name}</h1>
                <p>{this.props.brewMethod.description}</p>
                <h4>{this.props.brewMethod.equipment}</h4>
                {/* Iterate over a list of equipment in a ul  */}
            </div>
        )
    }
}

export default BrewMethod