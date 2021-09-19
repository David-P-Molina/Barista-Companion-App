import React, { Component } from 'react'

class BrewMethods extends Component {
    state = {
        brewMethods: [],
    }
    renderBrewMethods = () => {
        let brewMethods = {this.props.brewMethods}
        brewMethods.map((brew) => {    
            //iterate over brew methods 
        })
    }
    render() {
        return (
            <div>
                {this.renderBrewMethods}
            </div>
        )
    }
}

export default BrewMethods
