import React, { Component } from 'react'

class BrewMethods extends Component {
    mapOverBrewMethods = () => {
        let brewMethods = {this.props.brewMethods}
        brewMethods.map((brew) => {    
            //iterate over brew methods 
        })
    }
    render() {
        return (
            <div>
                {this.mapOverBrewMethods}
            </div>
        )
    }
}

export default BrewMethods
