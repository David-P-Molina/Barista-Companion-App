import React from 'react' 
import Error from './Error'
import '../css/form.css'

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
            deletable: true,
        }
        this.props.addRoaster(formData)
        this.setState({
            name: '',
            description: '',
            yearFounded: '',
            website: '',
        })
    }
    render() {
        let currentYear = new Date().getFullYear()
        return(      
            <div>
                <h1>Add New Roaster</h1>
                <div className='errors'>
                    <Error errors={this.props.errors}/>
                </div>
            <form className='roaster-form' onSubmit={this.handleOnSubmit} >
                <label htmlFor='roaster-brand-name'>Roaster Brand: </label>
                <input
                    required type='text'
                    name='name'
                    placeholder='Brand Name'
                    value={this.state.name}
                    onChange={this.handleOnChange}/>
                <label htmlFor='roaster-description'>Description: </label>
                <input
                    required type='text'
                    name='description'
                    placeholder='History of Brand'
                    value={this.state.description}
                    onChange={this.handleOnChange}/>
                <label htmlFor='roaster-year-founded'>Year Established/Founded: </label>
                <input
                    type='number'
                    name='yearFounded'
                    min='1870'
                    max={currentYear}
                    value={this.state.yearFounded}
                    onChange={this.handleOnChange}/>
                <label htmlFor='roaster-website'>Website: </label>
                <input
                    type='url'
                    name='website'
                    placeholder='www.roaster-website-url.com'
                    value={this.state.website}
                    onChange={this.handleOnChange}/>
                <button className='submit' type='submit'>Add Roaster</button>
            </form><br />
            <button onClick={() => this.props.return()}>Go Back To Roasters</button>
            </div>
        )
    }
}

export default RoasterForm