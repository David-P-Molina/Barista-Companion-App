import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import RecipesContainer from './containers/RecipesContainer'
import BrewMethodsContainer from './containers/BrewMethodsContainer';
import CoffeeBeansContainer from './containers/CoffeeBeansContainer'
import RoastersContainer from './containers/RoastersContainer'
import { connect } from 'react-redux'
import { fetchBrewMethods } from './actions/BrewActions'
import { fetchRecipes } from './actions/RecipeActions'
import { fetchCoffeeBeans } from './actions/CoffeeBeanActions'
import { fetchRoasters } from './actions/RoasterActions'

class App extends Component {
  fetchCalls = () => {
    this.props.fetchBrewMethods()
    this.props.fetchRoasters()
    this.props.fetchCoffeeBeans()
    this.props.fetchRecipes()
  }
  componentDidMount() {
    this.fetchCalls()
  }
  render() {
    return (
      <div className="App">
      <Router>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
            <Route exact path='/brew-methods' component={BrewMethodsContainer} />
            <Route exact path='/coffee-beans' component={CoffeeBeansContainer} />
            <Route exact path='/recipes' component={RecipesContainer} />
            <Route exact path='/roasters' component={RoastersContainer} />
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatchFn) => {
  return {
    fetchBrewMethods: () => dispatchFn(fetchBrewMethods()),
    fetchRoasters: () => dispatchFn(fetchRoasters()),
    fetchCoffeeBeans: () => dispatchFn(fetchCoffeeBeans()),
    fetchRecipes: () => dispatchFn(fetchRecipes()),
  }
}

export default connect(null, mapDispatchToProps)(App);
