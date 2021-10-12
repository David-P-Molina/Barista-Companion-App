import React from 'react' 
import { connect } from 'react-redux'
import { sendRoasterDataAction } from '../actions/RoasterAction'

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
            yearFounded: this.state.yearFounded,
            website: this.state.website,
        }
        this.sendBrewMethodData(formData)//Calls fetch post
        this.props.addRoaster(formData)
        this.setState({
            name: '',
            description: '',
            yearFounded: '',
            website: '',
        })
    }
    render() {
        return(      
            <form className='roaster-form' onSubmit={this.handleOnSubmit} >
                <label htmlFor='roaster-brand-name'>Roaster Brand: </label>
                <input
                    type='text'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleOnChange}/>
                <label htmlFor='roaster-description'>Description: </label>
                <input
                    type='text'
                    name='description'
                    value={this.state.description}
                    onChange={this.handleOnChange}/>
                <label htmlFor='roaster-year-founded'>Year Established/Founded: </label>
                <input
                    type='text'
                    name='year-founded'
                    value={this.state.yearFounded}
                    onChange={this.handleOnChange}/>
                <label htmlFor='roaster-website'>Website: </label>
                <input
                    type='text'
                    name='website'
                    value={this.state.website}
                    onChange={this.handleOnChange}/>
                <input type='submit'>Add Roaster</input>
            </form>
        )
    }
}

export default RoasterForm