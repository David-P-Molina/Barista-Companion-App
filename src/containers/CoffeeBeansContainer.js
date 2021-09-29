import React, { Component } from 'react'
import CoffeeBeanList from '../components/CoffeeBeanList'

class CoffeeBeans extends Component {
    constructor() {
        super()
        this.state = {
            coffeeBeans: [],
        }
    }
    componentDidMount() {
        fetch('ruby-api-url')
        .then((response) => response.json())
        .then((data) => this.setState({ coffeeBeans: data.coffeeBeans}))
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default CoffeeBeans
