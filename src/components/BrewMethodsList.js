import React from 'react'
import BrewMethod from './BrewMethod'

const BrewMethodsList = ({brewMethods, deleteBrewMethod}) => {
    const brewMethodsList = () => brewMethods.map((brew) => {
        return <BrewMethod key={brew.name} brew={brew} deleteBrewMethod={deleteBrewMethod}/>
     })
    return (
    <div className='brew-method-list'>
        {brewMethodsList()}
    </div>
    )
    }

export default BrewMethodsList
