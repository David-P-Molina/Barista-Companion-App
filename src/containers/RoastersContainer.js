import React, { Component } from 'react'
import RoastersList from '../components/RoastersList'
import RoasterForm from '../components/RoasterForm'
import Roaster from '../components/Roaster'
import { connect } from 'react-redux'
import { deleteRoasterAction, sendRoasterDataAction } from '../actions/RoasterActions'
import { Route, Switch} from 'react-router-dom'

class RoastersContainer extends Component {
    state = {
        roasters: [],
    }

    render() {
        return (
            <div className='brew-method-container'>
                <Switch>
                    <Route exact path='/roasters' component={(routeInfo) => {
                        return (
                            <RoastersList 
                                roasters={this.props.roasters} 
                                deleteRoaster={this.props.deleteRoaster}
                            />
                        )
                    }}
                    />
                    <Route exact path='/roasters/new' component={(routeInfo) => {
                        return (
                            <RoasterForm 
                                addRoaster={this.props.addRoaster} 
                                errors={this.props.errors}
                                return={() => routeInfo.history.push('/roasters')}
                            />
                        )
                    }}/>
                        
                    <Route exact path='/roasters/:id' component={(routeInfo) => {
                        const id = parseInt(routeInfo.match.params.id)
                        const foundRoaster = this.props.roasters.find((roaster) => roaster.id === id)
                        const roasterInfo = <Roaster roaster={foundRoaster}/>
                        return (this.props.roasters.length > 0 ? roasterInfo : <h1>Loading Roaster...</h1>)
                    }}
                    />
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
