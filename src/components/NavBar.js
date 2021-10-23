import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/roasters'> Roasters </NavLink>
                <NavLink to='/coffee-beans'> Coffee Beans </NavLink>
                <NavLink to='/brew-methods'> Brew Methods </NavLink>
                <NavLink to='/recipes'> Recipes </NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        )
    }
}

export default NavBar
