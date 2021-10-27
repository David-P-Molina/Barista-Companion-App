import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearErrorsAction } from '../actions/ErrorAction'

class Error extends Component {
    componentDidMount() {
       if(this.props.errors.length !== 0) {
           return setTimeout(() => this.props.clearErrors() , 5000)
       } 
    }
    render() {
        const renderErrors = this.props.errors.map((e) => <div key={e}>{e}</div>)
        return (
            <div className='error-messages'>
                <br/>
                {renderErrors}
                <br/>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        clearErrors: () => dispatch(clearErrorsAction())
    }
}

export default connect(null, mapDispatchToProps)(Error)