import React from 'react'
import BrewMethod from './BrewMethod'

const BrewMethodsList = ({brewMethods, deleteBrewMethod}) => {
    const brewMethodsList = () => brewMethods.map((brew) => {
        return <BrewMethod key={brew.name} brew={brew} deleteBrewMethod={deleteBrewMethod}/>
     })
    return (
    <div className='brew-method-list'>
        <h1>Brew Methods</h1><br />
        {brewMethodsList()}
    </div>
    )
    }

export default BrewMethodsList
