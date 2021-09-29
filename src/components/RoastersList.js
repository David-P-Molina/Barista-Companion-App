import React from 'react'
import Roaster from './Roaster'

const RoastersList = ({ roasters }) => {
    return (
        <div className='roaster-list'>
            {roasters.map((roaster, index) => (
                <Roaster key={index} props={roaster} />
            ))}
        </div>
    )
}

export default RoastersList