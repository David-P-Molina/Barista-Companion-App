import React from 'react' 

class RoasterForm extends React.Component {
    handleOnSubmit = (e) => {
        e.preventDefault()
        let formData = {

        }
    }
    render() {
        return(      
            <form className='roaster-form' onSubmit={this.handleOnSubmit} >
                
            </form>
        )
    }
}

export default RoasterForm