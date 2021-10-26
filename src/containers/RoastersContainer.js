import React, { Component } from 'react'
import { connect } from 'react-redux'
import RoastersList from '../components/RoastersList'
import RoasterForm from '../components/RoasterForm'
import { deleteRoasterAction } from '../actions/RoasterActions'

class RoastersContainer extends Component {
    state = {
        roasters: [],
    }
    render() {
        return (
            <div className='brew-method-container'>
                <RoasterForm 
                    addRoaster={this.props.addRoaster} 
                    errors={this.props.errors}
                />
                <RoastersList 
                    roasters={this.props.roasters} 
                    deleteRoaster={this.props.deleteRoaster}
                    />
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
        addRoaster: (formData) => dispatch({ type: "ADD_ROASTER", payload: formData }),
        deleteRoaster: (id) => dispatch(deleteRoasterAction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoastersContainer)
