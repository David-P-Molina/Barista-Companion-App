import React, { Component } from 'react'
import BrewMethodsList from '../components/BrewMethodsList'
import { connect } from 'react-redux'
import BrewMethodForm from '../components/BrewMethodForm'

class BrewMethodsContainer extends Component {
    state = {
        brewMethods: [],
    }
    componentDidMount() {
        fetch('http://localhost:3000/brew_methods')
        .then((response => {
            if (response.ok) {
                return response.json()
                .then((data) => this.setState({ brewMethods: data.brewMethods }))
            } else {
                return response.json()
                .catch((errors) => console.log(errors))
            }
        }))
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
    debugger
}
const mapDispatchToProps = (dispatch) => {
    return {
        addBrewMethod: (formData) => dispatch({ type: "ADD_BREW_METHOD", payload: formData })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrewMethodsContainer)
