import React, { Component } from 'react';
// import logo from './Star_of_David.svg';
import './App.css';
import People from './People';
import {
  HashRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AuthPage from './AuthPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="navbar navbar-expand-lg navbar-dark bg-primary">
          <h1 className="active "> Private Directory</h1>
          {/* <img src={logo} className="App-logo my-2 my-lg-0" alt="logo" /> */}
          {/* <form class="form-inline my-2 my-lg-0">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Github</button>
          </form> */}
        </header>
        <br />
        <Switch>
          <Route path='/people' component={People} />
          <Route path='/demo' component={People} />
          <Route path='/' component={AuthPage} />
        </Switch>
        {/* <footer><a href="https://github.com/michaelbdavidson7">Check out the source code</a></footer> */}
      </div>
    );
  }
}

export default App;
