import React from 'react'
import CoffeeBean from './CoffeeBean'
import { CoffeeBeanHeader } from './styling/CoffeeBeanHeader'

const CoffeeBeansList = ({ coffeeBeans, deleteCoffeeBean }) => {
    const coffeeBeansList = coffeeBeans.map((bean) => {
        return <CoffeeBean key={bean.name} coffeeBean={bean} deleteCoffeeBean={deleteCoffeeBean}/>
     })
    return (
        <div className='list'>
            <CoffeeBeanHeader />
            {coffeeBeansList}
        </div>
    )
}

export default CoffeeBeansList