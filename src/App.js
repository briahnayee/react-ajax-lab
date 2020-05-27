import React from 'react';
import { getAllStarships } from './services/sw-api';
import Starship from './components/starship';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import StarshipPage from './components/StarshipPage'

class App extends React.Component {
  state = {
    allStarships: null,
    selectedStarship: null
  }


  async componentDidMount() {
    const foundStarships = await getAllStarships()
    this.setState({
      allStarships: foundStarships,
      selectedStarship: null
    })
  }

  render() {
    const starshipComponents = this.state.allStarships ? this.state.allStarships.map((starship) => {
      return <Link 
        to={{
          pathname: '/starships',
          state: starship
        }}
        key={starship.name}
      >
        <Starship
          shipData={starship}
        />
      </Link>
    }) : null
    return (
      <div className="App">
        <h3>STAR WARS STARSHIPS</h3>
        <Switch>
          <Route exact path='/'>
            <div className="ships">
              {starshipComponents}
            </div>
          </Route>
          <Route path='/starships' render={({ location }) =>
            <StarshipPage
              location={location}
            />
          } />
        </Switch>

      </div>
    )
  }
}

export default App;
