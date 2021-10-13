import React, { Component } from 'react'
import BrewMethodsList from '../components/BrewMethodsList'
import { connect } from 'react-redux'
import BrewMethodForm from '../components/BrewMethodForm'
import { fetchBrewMethods as fetchBrewMethodsAction } from '../actions/BrewActions'

class BrewMethodsContainer extends Component {
    state = {
        brewMethods: [],
    }
    componentDidMount() {
        this.props.fetchBrewMethods()
    }
    render() {
        return (
            <div className='brew-method-container'>
                <BrewMethodForm addBrewMethod={this.props.addBrewMethod}/>
                <BrewMethodsList brewMethods={this.props.brewMethods} />
            </div>)
    }
}
const mapStateToProps =(state) => {
    return state.brewMethods
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchBrewMethods: () => dispatch(fetchBrewMethodsAction()),
        addBrewMethod: (formData) => dispatch({ type: "ADD_BREW_METHOD", payload: formData })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrewMethodsContainer)
