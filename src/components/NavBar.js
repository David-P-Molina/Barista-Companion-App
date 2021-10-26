import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavLink to='/'><img src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png" width="50" alt="coffee logo design creative idea logo elements" /></NavLink>
                <NavLink to='/roasters'> Roasters </NavLink>
                <NavLink to='/coffee-beans'> Coffee Beans </NavLink>
                <NavLink to='/brew-methods'> Brew Methods </NavLink>
                <NavLink to='/recipes'> Recipes </NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        )
    }
}
<img src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png" width="200" alt="coffee logo design creative idea logo elements" />
export default NavBar
