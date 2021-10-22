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
                <BrewMethodForm addBrewMethod={this.props.addBrewMethod}errors={this.props.errors}/>
                <BrewMethodsList brewMethods={this.props.brewMethods} />
            </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        errors: state.errors.errors,
        brewMethods: state.brewMethods.brewMethods
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addBrewMethod: (formData) => dispatch({ type: "ADD_BREW_METHOD", payload: formData })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrewMethodsContainer)
