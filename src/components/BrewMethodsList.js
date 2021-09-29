import React from 'react'
import BrewMethod from './BrewMethod'

const BrewMethodsList = ({ brewMethods }) => (
    <div className='brew-method-list'>
        {brewMethods.map((brew, index) => {
           return <BrewMethod key={index} brew={brew}/>
        })}
    </div>
)

export default BrewMethodsList
