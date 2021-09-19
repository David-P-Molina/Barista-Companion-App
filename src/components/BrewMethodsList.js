import React from 'react'
import BrewMethod from './BrewMethod'

const BrewMethodsList = ({ brewMethods }) => (
    <div className='brew-method-list'>
        {brewMethods.map((brew) => (
            <BrewMethod data={brew}/>
        ))}
    </div>
)

export default BrewMethodsList
