import React, { Component } from 'react'

class BrewMethods extends Component {
    state = {
        brewMethods: [],
    }
    componentDidMount() {
        fetch('ruby-api-url')
        .then((response) => response.json())
        .then((data) => this.setState({brewMethods: data.brewMethods}))
    }
    
    renderBrewMethods = () => {
        return this.state.brewMethods.map((brew) => {
            return (
                <div className='brew-method'>
                    <h2>{brew.name}</h2>
                    <p>{brew.description}</p>
                </div>
            )
        })
    }
    render() {
        return (
            <div className='brew-method-list'>
                {this.renderBrewMethods()}
            </div>
        )
    }
}

export default BrewMethods
