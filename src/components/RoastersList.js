import React from 'react'
import Roaster from './Roaster'

const RoastersList = ({ roasters }) => {
    return (
        <div className='roaster-list'>
            {roasters.map((roaster, index) => {
               return <Roaster key={index} roaster={roaster} />
            })}
        </div>
    )
}

export default RoastersList