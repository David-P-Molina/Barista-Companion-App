import React from 'react'
import Roaster from './Roaster'

const RoastersList = ({ roasters }) => {
    const roastersList = roasters.map((roaster) => {
        return <Roaster key={roaster.id} props={roaster} />
     })
    return (
        <div className='roaster-list'>
            {roastersList}
        </div>
    )
}

export default RoastersList