import React, { Component } from 'react'
import RoastersList from '../components/RoastersList'
import RoasterForm from '../components/RoasterForm'
import { connect } from 'react-redux'
import { deleteRoasterAction, sendRoasterDataAction } from '../actions/RoasterActions'
import { Route, Switch} from 'react-router-dom'

class RoastersContainer extends Component {
    state = {
        roasters: [],
    }
    handleOnClick = () => {
        
    }
    render() {
        return (
            <div className='brew-method-container'>
                <Switch>
                    <Route exact path='/roasters'>
                        <RoastersList 
                            roasters={this.props.roasters} 
                            deleteRoaster={this.props.deleteRoaster}
                        />
                    </Route>
                    <Route exact path='/roasters/new'>
                        <RoasterForm 
                            addRoaster={this.props.addRoaster} 
                            errors={this.props.errors}
                        />
                    </Route>
                </Switch>
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
        addRoaster: (formData) => dispatch(sendRoasterDataAction(formData)),
        deleteRoaster: (id) => dispatch(deleteRoasterAction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoastersContainer)
