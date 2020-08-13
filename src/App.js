import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import RestaurantsNear from './components/restaurantsNear';
import RestaurantDetails from './components/RestaurantDetails';
import RestaurantsMap from './components/RestaurantsMap';
import SearchRestaurants from './components/SearchRestaurants';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/details" component={RestaurantDetails} />
          <Route path="/map" component={RestaurantsMap} />
          <Route path="/search" component={SearchRestaurants} />
          <Route path="/" component={RestaurantsNear} exact />
        </Switch>
      </div>
    </Router>
  );
}
export default App;