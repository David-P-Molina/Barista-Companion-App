import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Error extends Component {
    componentDidUpdate() {
        setTimeout(() => this.props.clearErrors() , 5500);
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
        clearErrors: () => dispatch({type: 'CLEAR_ERRORS'})
    }
}

export default connect(null, mapDispatchToProps)(Error)