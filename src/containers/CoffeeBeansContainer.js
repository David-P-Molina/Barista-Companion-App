import React, { Component } from 'react'
import { connect } from 'react-redux'
import CoffeeBeanForm from '../components/CoffeeBeanForm'
import CoffeeBeanList from '../components/CoffeeBeansList'

class CoffeeBeansContainer extends Component {
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
            <div className='coffee-bean-container'>
                <CoffeeBeanForm addCoffeeBean={this.props.addCoffeeBean}/>
                <CoffeeBeanList coffeeBeans={this.props.coffeeBeans}/>
            </div>
        )
    }
}
const mapStateToProps = ({coffeeBeans}) => ({coffeeBeans})
const mapDispatchToProps = (dispatch) => {
    return {
        addCoffeeBean: (formData) => dispatch({ type: "ADD_COFFEE_BEAN", payload: formData })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CoffeeBeansContainer)
