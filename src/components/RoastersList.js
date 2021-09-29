import React from 'react'
import Roaster from './Roaster'

const RoastersList = ({ roasters }) => {
    const roastersList = roasters.map((roaster, index) => {
        return <Roaster key={index} props={roaster} />
     })
    return (
        <div className='roaster-list'>
            {roastersList}
        </div>
    )
}

export default RoastersList