import React, { Component } from 'react'
import BrewMethodsList from '../components/BrewMethodsList'
import BrewMethodForm from '../components/BrewMethodForm'
import { connect } from 'react-redux'
import { sendBrewMethodDataAction, deleteBrewMethodAction } from '../actions/BrewActions'
import { Route, Switch} from 'react-router-dom'

class BrewMethodsContainer extends Component {
    state = {
        brewMethods: [],
    }
    render() {
        return (
            <div className='brew-method-container'>
                <Switch>
                    <Route exact path='/brew-methods'>
                        <BrewMethodsList 
                            brewMethods={this.props.brewMethods} 
                            deleteBrewMethod={this.props.deleteBrewMethod}
                        />
                    </Route>
                    <Route exact path='/brew-methods/new' component={(routeInfo) => {
                        return(
                            <BrewMethodForm 
                                addBrewMethod={this.props.sendBrewMethodDataWithDispatchFn} 
                                errors={this.props.errors}
                                return={() => routeInfo.history.push('/brew-methods')}
                            />
                        )
                    }}/>                      
                </Switch>
            </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        errors: state.errors.brewMethodErrors,
        brewMethods: state.brewMethods.brewMethods
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendBrewMethodDataWithDispatchFn: (data) => dispatch(sendBrewMethodDataAction(data)),
        deleteBrewMethod: (id) => dispatch(deleteBrewMethodAction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrewMethodsContainer)
