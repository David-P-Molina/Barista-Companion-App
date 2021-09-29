import React from 'react'
import CoffeeBean from './CoffeeBean'

const CoffeeBeansList = ({ coffeeBeans }) => {
    const coffeeBeansList = coffeeBeans.map((bean, index) => {
        return <CoffeeBean key={index} props={bean} />
     })
    return (
        <div className='coffee-bean-list'>
            {coffeeBeansList}
        </div>
    )
}

export default CoffeeBeansList