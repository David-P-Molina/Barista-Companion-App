import React from 'react'
import { connect } from 'react-redux'

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
const mapStateToProps = (state) => {
    return { roasters: state.roasters }
}

export default connect(mapStateToProps)(RoastersList)