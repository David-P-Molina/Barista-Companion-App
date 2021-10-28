import React from 'react'
// import { NavLink } from 'react-router-dom'
import * as ReactBootStrap from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <ReactBootStrap.Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootStrap.Container>
            <ReactBootStrap.Navbar.Brand href="/">Barista Companion</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="me-auto">
                <ReactBootStrap.NavDropdown title="Roasters & Coffee" id="collasible-nav-dropdown">
                  <ReactBootStrap.NavDropdown.Item href="/roasters">View All Roasters</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="/coffee-beans">View All Coffee Beans</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Divider />
                  <ReactBootStrap.NavDropdown.Item href="/roasters/new">Add Roaster</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="/coffee-beans/new">Add a Coffee Bean</ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
                <ReactBootStrap.NavDropdown title="Brewing Methods" id="collasible-nav-dropdown">
                  <ReactBootStrap.NavDropdown.Item href="/brew-methods">View All Brewing Methods</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Divider />
                  <ReactBootStrap.NavDropdown.Item href="/brew-methods/new">Add a Brewing Method</ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
                <ReactBootStrap.NavDropdown title="Recipes" id="collasible-nav-dropdown">
                  <ReactBootStrap.NavDropdown.Item href="/recipes">View All Recipes</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Divider />
                  <ReactBootStrap.NavDropdown.Item href="/recipes/new"> Add a Recipe</ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link eventKey={2} href="/about">
              About
            </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
            // <div>
            //     <NavLink to='/'><img src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png" width="50" alt="coffee logo design creative idea logo elements" /></NavLink>
            //     <NavLink to='/roasters'> Roasters </NavLink>
            //     <NavLink to='/coffee-beans'> Coffee Beans </NavLink>
            //     <NavLink to='/brew-methods'> Brew Methods </NavLink>
            //     <NavLink to='/recipes'> Recipes </NavLink>
            //     <NavLink to='/about'>About</NavLink>
            // </div>
    )
}
<img src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png" width="200" alt="coffee logo design creative idea logo elements" />
export default NavigationBar
