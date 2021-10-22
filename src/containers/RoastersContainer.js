import React, { Component } from 'react'
import { connect } from 'react-redux'
import RoastersList from '../components/RoastersList'
import RoasterForm from '../components/RoasterForm'

class RoastersContainer extends Component {
    state = {
        roasters: [],
    }
    render() {
        return (
            <div className='brew-method-container'>
                <RoasterForm addRoaster={this.props.addRoaster} errors={this.props.errors}/>
                <RoastersList roasters={this.props.roasters} />
            </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        errors: state.errors.roasterErrors,
        roasters: state.roasters.roasters
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addRoaster: (formData) => dispatch({ type: "ADD_ROASTER", payload: formData })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoastersContainer)
