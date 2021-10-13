import React from 'react'
import BrewMethod from './BrewMethod'

const BrewMethodsList = ({ brewMethods }) => {
    debugger
    const brewMethodsList = brewMethods.map((brew, index) => {
        return <BrewMethod key={index} {...brew.attributes} />
     })
    return (
    <div className='brew-method-list'>
        {brewMethodsList}
    </div>
    )
    }

export default BrewMethodsList
