import React, { Component } from 'react'
import { connect } from 'react-redux'
import RoastersList from '../components/RoastersList'
import RoasterForm from '../components/RoasterForm'

class RoastersContainer extends Component {
    state = {
        roaster: [],
    }
    componentDidMount() {
        fetch('ruby-api-url')
        .then((response) => response.json())
        .then((data) => this.setState({ roasters: data.roasters }))
    }
    render() {
        return (
            <div className='brew-method-container'>
                <RoasterForm addRoaster={this.props.add}/>
                <RoastersList roasters={this.props.roasters} />
            </div>)
    }
}
const mapStateToProps =({roasters}) => ({roasters})
const mapDispatchToProps = (dispatch) => {
    return {
        addRoaster: (formData) => dispatch({ type: "ADD_ROASTER", payload: formData })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoastersContainer)
