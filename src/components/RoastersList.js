import React from 'react'
import Roaster from './Roaster'

const RoastersList = ({ roasters, deleteRoaster }) => {
    const roastersList = roasters.map((roaster, index) => {
        return <Roaster key={index} roaster={roaster} deleteRoaster={deleteRoaster}/>
     })
    return (
        <div className='roaster-list'>
            {roastersList}
        </div>
    )
}

export default RoastersList