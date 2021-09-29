import React from 'react'
import CoffeeBean from './CoffeeBean'

const CoffeeBeansList = ({ coffeeBeans }) => {
    return (
        <div className='coffee-bean-list'>
            {coffeeBeans.map((bean, index) => {
               return <CoffeeBean key={index} bean={bean} />
            })}
        </div>
    )
}

export default CoffeeBeansList