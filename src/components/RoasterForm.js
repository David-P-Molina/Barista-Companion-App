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
                <label htmlFor='roaster-brand-name'>Roaster Brand: </label>
                <label htmlFor='roaster-description'>Description: </label>
                <label htmlFor='roaster-year-founded'>Year Established/Founded: </label>
                <label htmlFor='roaster-website'>Website: </label>
            </form>
        )
    }
}

export default RoasterForm