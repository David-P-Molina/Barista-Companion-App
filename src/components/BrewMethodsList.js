import React from 'react'
import BrewMethod from './BrewMethod'
import {BrewMethodHeader} from './styling/BrewMethodHeader'

const BrewMethodsList = ({brewMethods, deleteBrewMethod}) => {
    const brewMethodsList = () => brewMethods.map((brew) => {
        return <BrewMethod key={brew.name} brew={brew} deleteBrewMethod={deleteBrewMethod}/>
     })
    return (
    <div className='list'>
        <BrewMethodHeader /><br />
        {brewMethodsList()}
    </div>
    )
    }

export default BrewMethodsList
