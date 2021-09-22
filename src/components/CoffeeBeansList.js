import React from 'react'
import CoffeeBean from './CoffeeBean'

const CoffeeBeansList = ({ coffeeBeans }) => {
    return (
        <div className='coffee-bean-list'>
            {coffeeBeans.map((bean) => (
                <CoffeeBean data={bean} />
            ))}
        </div>
    )
}

export default CoffeeBeansList