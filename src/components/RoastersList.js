import React from 'react'
import Roaster from './Roaster'
import { RoasterHeader } from './styling/RoasterHeader'

const RoastersList = ({ roasters, deleteRoaster }) => {
    const roastersList = roasters.map((roaster, index) => {
        return <Roaster key={index} roaster={roaster} deleteRoaster={deleteRoaster}/>
     })
    return (
        <div className='list'>
            <RoasterHeader /><br />
            {roastersList}
        </div>
    )
}

export default RoastersList