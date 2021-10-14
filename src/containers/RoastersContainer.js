import React, { Component } from 'react'
import { connect } from 'react-redux'
import RoastersList from '../components/RoastersList'
import RoasterForm from '../components/RoasterForm'
import { fetchRoasters } from '../actions/RoasterAction'

class RoastersContainer extends Component {
    state = {
        roaster: [],
    }
    componentDidMount() {
        this.props.fetchRoasters()
    }
    render() {
        return (
            <div className='brew-method-container'>
                {/* <RoasterForm addRoaster={this.props.addRoaster}/> */}
                <RoastersList roasters={this.props.roasters} />
            </div>)
    }
}
const mapStateToProps =({roasters}) => ({roasters})
const mapDispatchToProps = (dispatch) => {
    return {
        fetchRoasters: () => dispatch(fetchRoasters()),
        addRoaster: (formData) => dispatch({ type: "ADD_ROASTER", payload: formData })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoastersContainer)
