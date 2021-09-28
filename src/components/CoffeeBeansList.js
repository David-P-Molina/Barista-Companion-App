import React from 'react'
import CoffeeBean from './CoffeeBean'

const CoffeeBeansList = ({ coffeeBeans }) => {
    return (
        <div className='coffee-bean-list'>
            {coffeeBeans.map((bean, index) => (
                <CoffeeBean key={index} props={bean} />
            ))}
        </div>
    )
}

export default CoffeeBeansList