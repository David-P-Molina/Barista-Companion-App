import React from 'react'

const Error = ({props}) => {
    const renderErrors = props.map((e) => <li>{e}</li>)
    return (
        <div className='error-message'>
            <br/>
            {renderErrors}
            <br/>
        </div>
    )
}

export default Error