import React from 'react'

const Error = ({props}) => {
    return (
        <div className='error-message'>
            {/* {props.errors} */}
            {console.log(props.errors)}
        </div>
    )
}

export default Error