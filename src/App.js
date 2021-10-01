import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import CoffeeBeansContainer from './containers/CoffeeBeansContainer'
import RoastersContainer from './containers/RoastersContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Router>
        <>
          <Route exact path='/'>
            <App />
          </Route>
          <Route exact path='/coffee-beans' component={CoffeeBeansContainer} />
          <Route exact path='/roasters' component={RoastersContainer} />
        </>
      </Router>
    </div>
  );
}

export default App;
