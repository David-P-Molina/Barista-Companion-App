import React from 'react'
import Roaster from './Roaster'

const RoastersList = ({ roasters }) => {
    return (
        <div className='roaster-list'>
            {roasters.map((roaster) => (
                <Roaster data={roaster}} />
            ))}
        </div>
    )
}

export default RoastersList