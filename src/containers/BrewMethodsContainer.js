import React, { Component } from 'react'
import BrewMethodsList from '../components/BrewMethodsList'
import { connect } from 'react-redux'
import BrewMethodForm from '../components/BrewMethodForm'
import { sendBrewMethodDataAction, deleteBrewMethodAction } from '../actions/BrewActions'

class BrewMethodsContainer extends Component {
    state = {
        brewMethods: [],
    }
    render() {
        return (
            <div className='brew-method-container'>
                <BrewMethodForm 
                    addBrewMethod={this.props.sendBrewMethodDataWithDispatchFn} 
                    errors={this.props.errors}
                />
                <BrewMethodsList 
                    brewMethods={this.props.brewMethods} 
                    deleteBrewMethod={this.props.deleteBrewMethod}
                />
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
