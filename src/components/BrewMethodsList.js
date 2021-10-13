import React from 'react'
import BrewMethod from './BrewMethod'

const BrewMethodsList = ({ brewMethods }) => {
    const brewMethodsList = brewMethods.map((brew, index) => {
        return <BrewMethod key={index} props={brew} />
     })
    return (
    <div className='brew-method-list'>
        {brewMethodsList}
    </div>
    )
    }

export default BrewMethodsList
