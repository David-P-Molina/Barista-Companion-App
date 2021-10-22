import React from 'react' 
import { connect } from 'react-redux'
import { sendRoasterDataAction } from '../actions/RoasterActions'

class RoasterForm extends React.Component {
    state = {
        name: '',
        description: '',
        yearFounded: '',
        website: '',
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        let formData = {
            name: this.state.name,
            description: this.state.description,
            year_founded: this.state.yearFounded,
            website: this.state.website,
        }
        this.props.sendRoasterDataWithDispatchFn(formData)
        this.setState({
            name: '',
            description: '',
            yearFounded: '',
            website: '',
        })
    }
    render() {
        return(      
            <div>
                <h1>Add New Roaster</h1>
            <form className='roaster-form' onSubmit={this.handleOnSubmit} >
                <label htmlFor='roaster-brand-name'>Roaster Brand: </label><br />
                <input
                    type='text'
                    name='name'
                    placeholder='Brand Name'
                    value={this.state.name}
                    onChange={this.handleOnChange}/><br />
                <label htmlFor='roaster-description'>Description: </label><br />
                <input
                    type='text'
                    name='description'
                    placeholder='History of Brand'
                    value={this.state.description}
                    onChange={this.handleOnChange}/><br />
                <label htmlFor='roaster-year-founded'>Year Established/Founded: </label><br />
                <input
                    type='text'
                    name='year-founded'
                    value={this.state.yearFounded}
                    onChange={this.handleOnChange}/><br />
                <label htmlFor='roaster-website'>Website: </label><br />
                <input
                    type='text'
                    name='website'
                    placeholder='www.roaster-website-url.com'
                    value={this.state.website}
                    onChange={this.handleOnChange}/><br />
                <button type='submit'>Add Roaster</button>
            </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatchFn) => {
    return {
        sendRoasterDataWithDispatchFn: (data) => dispatchFn(sendRoasterDataAction(data))
    }
}
export default connect(null, mapDispatchToProps)(RoasterForm)