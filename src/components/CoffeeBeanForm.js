import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendCoffeeBeanDataAction } from '../actions/CoffeeBeanActions'
import Error from './Error'

class CoffeeBeanForm extends Component {
    state = {
        name: '',
        roaster: '',
        roast: '',
        wholeBean: '',
        description: '',
        notes: '',
        blendType: '',
        region: '',
        processingMethod: '',
        dryingMethod: '',
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        let formData = {
            name: this.state.name ,
            roaster_id: this.state.roaster ,
            roast: this.state.roast ,
            whole_bean: this.state.wholeBean ,
            description: this.state.description ,
            notes: this.state.notes ,
            blend_type: this.state.blendType,
            region: this.state.region,
            processing_method: this.state.processingMethod,
            drying_method: this.state.dryingMethod,
            deletable: true,
        }
        this.props.sendCoffeeBeanDataWithDispatchFn(formData)
        this.setState({
            name: '',
            roaster: '',
            roast: '',
            wholeBean: '',
            description: '',
            notes: '',
            blendType: '',
            region: '',
            processingMethod: '',
            dryingMethod: '',
        })
    }
    renderRoasters = () => {
        return this.props.roastersList.map((roaster) => <option key={roaster.name} value={roaster.id}>{roaster.name}</option>)
    }
    renderRoastLevels = () => {
        const roastArray = ['Blonde Roast', 'Light/ City Roast', 'Light-Medium/ City +', 'Medium/ Full City', 'Medium-Dark/ Full City +', 'Dark Roast/ Vienna-French']
        return roastArray.map((r) => <option key={r} value={r}>{r}</option>)
    }
    renderBlendType = () => {
        const blendsArray = ["Espresso", "Single-Origin", "Blend", "Decaf", "Decaf Espresso"]
        return blendsArray.map((blend) => <option key={blend} value={blend}>{blend}</option>)
    }
    render() {
        return (
            <div>
                <h1>Create Coffee Bean Information</h1>
                <div className='errors'>
                    <Error errors={this.props.errors}/>
                </div>
                <form className='coffee-bean-form' onSubmit={this.handleOnSubmit}>
                    <label htmlFor='coffee-bean-name'>Name: </label> <br />
                    <input 
                        required type='text' 
                        name='name'
                        placeholder='Coffee Bean'
                        value={this.state.name} 
                        onChange={this.handleOnChange} /> <br />
                    <label htmlFor='roaster'>Roaster: </label>
                    <select 
                        type='text'
                        name='roaster'
                        value={this.state.roaster} 
                        onChange={this.handleOnChange}
                        >
                            <option value=''>Select a Roaster From List</option>
                        {this.renderRoasters()}
                    </select> <br />
                    <label htmlFor='blend-type'>Blend Type: </label>
                    <select
                        name='blendType'
                        value={this.state.blendType}
                        onChange={this.handleOnChange}
                    >
                        <option value=''>Select Blend Type</option>
                        {this.renderBlendType()}
                        </select> <br />
                    <label htmlFor='roast-level'>Roast Level: </label><br />
                    <select 
                        type='select' 
                        name='roast'
                        value={this.state.roast} 
                        onChange={this.handleOnChange}
                    >
                        <option value=''>Select Roast Level: </option>
                        {this.renderRoastLevels()}
                    </select> <br />
                    <label htmlFor='whole-bean-boolean'>Whole Bean: </label>
                    <input 
                        type='checkbox' 
                        name='wholeBean'
                        value={this.state.wholeBean} 
                        onChange={this.handleOnChange} /><br />
                    <label htmlFor='region'>Region: </label>
                    <input 
                        type='text' 
                        name='region'
                        value={this.state.region} 
                        onChange={this.handleOnChange} /><br />
                    <label htmlFor='processing-method'>Processing Method: </label>
                    <input 
                        type='text' 
                        name='processingMethod'
                        value={this.state.processingMethod} 
                        onChange={this.handleOnChange} /><br />
                    <label htmlFor='drying-method'>Drying Method: </label>
                    <input 
                        type='text' 
                        name='dryingMethod'
                        value={this.state.dryingMethod} 
                        onChange={this.handleOnChange} /><br />    
                    <label htmlFor='description'>Description: </label><br />
                    <input 
                        type='text' 
                        name='description'
                        placeholder='Story behind the bean'
                        value={this.state.description} 
                        onChange={this.handleOnChange}/><br />
                    <label htmlFor='notes'>Tasting Notes: </label><br />
                    <input 
                        type='text' 
                        name='notes'
                        placeholder='Hint of Lemon, Dark Chocolate, etc.'
                        value={this.state.notes} 
                        onChange={this.handleOnChange}/><br /><br />
                    <button type='submit'>Add Coffee Bean</button>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatchFn) => {
    return {
        sendCoffeeBeanDataWithDispatchFn: (data) => dispatchFn(sendCoffeeBeanDataAction(data))
    }
}
export default connect(null, mapDispatchToProps)(CoffeeBeanForm)
