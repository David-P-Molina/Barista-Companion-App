import React from 'react'
import CoffeeBean from './CoffeeBean'

const CoffeeBeansList = ({ coffeeBeans, deleteCoffeeBean }) => {
    const coffeeBeansList = coffeeBeans.map((bean) => {
        return <CoffeeBean key={bean.name} coffeeBean={bean} deleteCoffeeBean={deleteCoffeeBean}/>
     })
    return (
        <div className='coffee-bean-list'>
            {coffeeBeansList}
        </div>
    )
}

export default CoffeeBeansList