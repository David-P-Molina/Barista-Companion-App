import React, { Component } from 'react'
import BrewMethodsList from '../components/BrewMethodsList'
import { connect } from 'react-redux'
import BrewMethodForm from '../components/BrewMethodForm'

class BrewMethodsContainer extends Component {
    state = {
        brewMethods: [],
    }
    render() {
        return (
            <div className='brew-method-container'>
                <BrewMethodForm 
                    addBrewMethod={this.props.addBrewMethod} 
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
        addBrewMethod: (formData) => dispatch({ type: "ADD_BREW_METHOD", payload: formData }),
        deleteBrewMethod: (id) => dispatch({type: 'DELETE_BREW_METHOD', id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrewMethodsContainer)
