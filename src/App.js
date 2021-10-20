import './App.css';
import NavBar from './components/NavBar'
import BrewMethodsContainer from './containers/BrewMethodsContainer';
import CoffeeBeansContainer from './containers/CoffeeBeansContainer'
import RoastersContainer from './containers/RoastersContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react'
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
      <>
      </>
      // <div className="App">
      //   <header className="App-header">
      //     <NavBar />
      //   </header>
      //   <Router>
      //     <>
      //       <Route exact path='/'>
      //         {/* <BrewMethodsContainer /> */}
      //       </Route>
      //       {/* <Route exact path='/coffee-beans' component={CoffeeBeansContainer} />
      //       <Route exact path='/roasters' component={RoastersContainer} /> */}
      //     </>
      //   </Router>
      // </div>
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
