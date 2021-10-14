import React from 'react'
import CoffeeBean from './CoffeeBean'

const CoffeeBeansList = ({ coffeeBeans }) => {
    const coffeeBeansList = coffeeBeans.map((bean) => {
        return <CoffeeBean key={bean.name} props={bean} />
     })
    return (
        <div className='coffee-bean-list'>
            {coffeeBeansList}
        </div>
    )
}

export default CoffeeBeansList