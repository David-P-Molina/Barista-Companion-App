import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div>
                NavBar
                <NavLink to='/'></NavLink>
                <NavLink to='/roasters'> Roasters </NavLink>
                <NavLink to='/coffee-beans'> Coffee Beans </NavLink>
                <NavLink to='/brew-methods'> Brew Methods </NavLink>
                <NavLink to='/recipes'> Recipes </NavLink>
            </div>
        )
    }
}

export default NavBar
