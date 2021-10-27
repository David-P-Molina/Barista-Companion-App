import React, { Component } from 'react'
import CoffeeBeanForm from '../components/CoffeeBeanForm'
import CoffeeBeanList from '../components/CoffeeBeansList'
import CoffeeBean from '../components/CoffeeBean'
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
                <Switch>
                    <Route exact path='/coffee-beans'>
                        <CoffeeBeanList 
                            coffeeBeans={this.props.coffeeBeans}
                            deleteCoffeeBean={this.props.deleteCoffeeBean}
                        />
                        </Route>
                    <Route exact path='/coffee-beans/new' component={(routeInfo) => {
                        return (
                            <CoffeeBeanForm 
                                addCoffeeBean={this.props.addCoffeeBean} 
                                roastersList={this.props.roastersList} 
                                errors={this.props.errors}
                                return={() => routeInfo.history.push('/coffee-beans')}
                            />
                            )
                        }}/>
                    <Route exact path='/coffee-beans/:id' component={(routeInfo) => {
                        const id = parseInt(routeInfo.match.params.id)
                        const foundCoffeeBean = this.props.coffeeBeans.find((bean) => bean.id === id)
                        const coffeeBeanInfo = <CoffeeBean coffeeBean={foundCoffeeBean}/>
                        return (this.props.coffeeBeans.length > 0 ? coffeeBeanInfo : <h1>Loading Roaster...</h1>)
                    }}
                    />
                </Switch>
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
