import React from 'react'
import BrewMethod from './BrewMethod'

const BrewMethodsList = ({brewMethods, deleteBrewMethod}) => {
    
    console.log({brewMethods, deleteBrewMethod})
    const brewMethodsList = () => brewMethods.map((brew) => {
        return <BrewMethod key={brew.id} props={brew} deleteBrewMethod={deleteBrewMethod}/>
     })
    return (
    <div className='brew-method-list'>
        {brewMethodsList()}
    </div>
    )
    }

export default BrewMethodsList
