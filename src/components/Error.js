
import React, { Component } from 'react'

export class Error extends Component {
    componentDidMount() {
        
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

export default Error