import React, { Component } from 'react'
import CoffeeBeanForm from '../components/CoffeeBeanForm'
import CoffeeBeanList from '../components/CoffeeBeansList'
import { connect } from 'react-redux'
import { deleteCoffeeBeanAction, sendCoffeeBeanDataAction } from '../actions/CoffeeBeanActions'
import { Route, Switch} from 'react-router-dom'

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
                <CoffeeBeanList 
                    coffeeBeans={this.props.coffeeBeans}
                    deleteCoffeeBean={this.props.deleteCoffeeBean}
                />
                <CoffeeBeanForm 
                    addCoffeeBean={this.props.addCoffeeBean} 
                    roastersList={this.props.roastersList} 
                    errors={this.props.errors}
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
        addCoffeeBean: (formData) => dispatch(sendCoffeeBeanDataAction(formData)),
        deleteCoffeeBean: (id) => dispatch(deleteCoffeeBeanAction(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CoffeeBeansContainer)
