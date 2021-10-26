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

    render() {
        return (
            <div className='coffee-bean-container'>
                <CoffeeBeanForm 
                    addCoffeeBean={this.props.addCoffeeBean} 
                    roastersList={this.props.roastersList} 
                    errors={this.props.errors}
                    />
                <CoffeeBeanList 
                    coffeeBeans={this.props.coffeeBeans}
                    deleteCoffeeBean={this.props.deleteCoffeeBean}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        errors: state.errors.coffeeBeanErrors,
        coffeeBeans: state.coffeeBeans.coffeeBeans,
        roastersList: state.roasters.roasters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCoffeeBean: (formData) => dispatch({ type: "ADD_COFFEE_BEAN", payload: formData }),
        deleteCoffeeBean: (id) => dispatch({ type: 'DELETE_COFFEE_BEAN', id})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CoffeeBeansContainer)
