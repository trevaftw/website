import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch, //put switch around the routes will check all the routes for a match, then if not it will render the 404--see last route before </switch>
} from 'react-router-dom';

//styling
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

//components
import Nav from '../Nav/Nav';

//routes
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <CSSTransitionGroup
           transitionName="example"
           transitionAppear={true}
           transitionAppearTimeout={500}
           transitionEnter={false}
           transitionLeave={false}>
          <Nav />
        
        <br /><br />
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
        </CSSTransitionGroup>
      </Router>
    );
  }
}

export default App;
