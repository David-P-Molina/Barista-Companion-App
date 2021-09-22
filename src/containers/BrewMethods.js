import React, { Component } from 'react'
import BrewMethodsList from '../components/BrewMethodsList'

class BrewMethods extends Component {
    state = {
        brewMethods: [],
    }
    componentDidMount() {
        fetch('ruby-api-url')
        .then((response) => response.json())
        .then((data) => this.setState({ brewMethods: data.brewMethods }))
    }
    render() {
        return <BrewMethodsList brewMethods={this.state.brewMethods}>
    }
}

export default BrewMethods
