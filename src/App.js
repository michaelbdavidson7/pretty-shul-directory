import React, { Component } from 'react';
// import logo from './Star_of_David.svg';
import './App.css';
import PersonCard from './PersonCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.sampleDirectory = [{ name: 'Dergus Bergus', joinYear: 2012 }, { name: 'Tergus Nergus', joinYear: 2012 }, { name: 'Plergus Nergus', joinYear: 2012 }, { name: 'Flerg Blergson', joinYear: 2012 }, { name: 'Dergus Bergus', joinYear: 2012 }, { name: 'Tergus Nergus', joinYear: 2012 }, { name: 'Plergus Nergus', joinYear: 2012 }, { name: 'Flerg Blergson', joinYear: 2012 }];

  }

  render() {
    return (
      <div className="App">
        <header className="navbar navbar-expand-lg navbar-dark bg-primary">
          <h1 className="active "> Shul Directory</h1>
          {/* <img src={logo} className="App-logo my-2 my-lg-0" alt="logo" /> */}
        </header>
        <br />
        <h3 className="App-intro">
          Forget someone's name and now it's too late to ask?
        </h3>
        <br />
        <div className="col-md-10">
          <div className="card-columns offset-md-3">
            {this.sampleDirectory.map((person) => {
              return <PersonCard person={person}  />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
