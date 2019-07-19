import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch, //put switch around the routes will check all the routes for a match, then if not it will render the 404--see last route before </switch>
} from 'react-router-dom';

//styling
import './App.css';

//components
import Nav from '../Nav/Nav';

//routes
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route render={() => <center><h1>404<br /><br />This page doesn't exist<br />Why did you come here?</h1></center>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
