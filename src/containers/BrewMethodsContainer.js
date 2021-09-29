import React, { Component } from 'react'
import BrewMethodsList from '../components/BrewMethodsList'
import { connect } from 'react-redux'
import BrewMethodForm from '../components/BrewMethodForm'

class BrewMethods extends Component {
    state = {
        brewMethods: [],
    }
    componentDidMount() {
        fetch('ruby-api-url')
        .then((response) => response.json())
        .then((data) => this.setState({ brewMethods: data.brewMethods }))
    }
    render() {
        return (
            <>
            <BrewMethodForm addBrewMethod={this.props.addBrewMethod}/>
            <BrewMethodsList brewMethods={this.props.brewMethods} />
            </>)
    }
}
const mapStateToProps =({brewMethods}) => ({brewMethods})
const mapDispatchToProps = (dispatch) => {
    return {
        addBrewMethod: (formData) => dispatch({ type: "ADD_BREW_METHOD", payload: formData })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrewMethods)
