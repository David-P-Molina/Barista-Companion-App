import React from 'react'
import BrewMethod from './BrewMethod'

const BrewMethodsList = ({ brewMethods }) => {
    const brewMethodsList = brewMethods.map((brew) => {
        return <BrewMethod key={brew.name} props={brew} />
     })
    return (
    <div className='brew-method-list'>
        {brewMethodsList}
    </div>
    )
    }

export default BrewMethodsList
