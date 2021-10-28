import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavigationBar from './components/NavBar'
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
        <NavigationBar />
        <br />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route path='/brew-methods' component={() => <BrewMethodsContainer/> } />
          <Route path='/coffee-beans' component={() => <CoffeeBeansContainer />} />
          <Route path='/recipes' component={() => <RecipesContainer />} /> 
          <Route path='/roasters' component={() => <RoastersContainer />} />
          <Route path='/' render={() => <h2>404! The Page You Are Trying To Access Does Not Exist</h2>} />
        </Switch>
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
