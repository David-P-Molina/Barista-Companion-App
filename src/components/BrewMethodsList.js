import React from 'react'
import BrewMethod from './BrewMethod'

const BrewMethodsList = ({ brewMethods }) => (
    <div className='brew-method-list'>
        {brewMethods.map((brew, index) => (
            <BrewMethod key={index} props={brew}/>
        ))}
    </div>
)

export default BrewMethodsList
