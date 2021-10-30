import React from 'react'
import CoffeeBean from './CoffeeBean'

const CoffeeBeansList = ({ coffeeBeans, deleteCoffeeBean }) => {
    const coffeeBeansList = coffeeBeans.map((bean) => {
        return <CoffeeBean key={bean.name} coffeeBean={bean} deleteCoffeeBean={deleteCoffeeBean}/>
     })
    return (
        <div className='coffee-bean-list'>
            <h1>Coffee Beans</h1><br />
            {coffeeBeansList}
        </div>
    )
}

export default CoffeeBeansList