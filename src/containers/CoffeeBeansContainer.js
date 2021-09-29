import React, { Component } from 'react'
import { connect } from 'react-redux'
import CoffeeBeanForm from '../components/CoffeeBeanForm'
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
                <CoffeeBeanForm addCoffeeBean={this.props.addCoffeeBean}/>
                <CoffeeBeanList />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCoffeeBean: (formData) => dispatch({ type: "ADD_COFFEE_BEAN", payload: formData })
    }
}
export default connect(null, mapDispatchToProps)CoffeeBeans
