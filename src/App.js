import React, { Component } from 'react';
import logo from './Star_of_David.svg';
import placeholderImg from './placeholder.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.sampleDirectory = [{ name: 'Dergus Bergus', joinYear: 2012 }, { name: 'Tergus Nergus', joinYear: 2012 }, { name: 'Plergus Nergus', joinYear: 2012 }, { name: 'Flerg Blergson', joinYear: 2012 }, { name: 'Dergus Bergus', joinYear: 2012 }, { name: 'Tergus Nergus', joinYear: 2012 }, { name: 'Plergus Nergus', joinYear: 2012 }, { name: 'Flerg Blergson', joinYear: 2012 }];

  }

  render() {
    return (
      <div className="App">
        <header className="navbar navbar-expand-lg navbar-dark bg-primary">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="active">Shul Directory</h1>
        </header>
        <br />
        <h3 className="App-intro">
          Forget someone's name and now it's too late to ask?
        </h3>
        <br />
        <div className="col-md-10">
          <div className="card-columns offset-md-3">
            {this.sampleDirectory.map((person) => {
              return <div className="card" style={{ width: "20rem" }}>
                <img className="card-img-top" src={placeholderImg} />
                <div className="card-body">
                  <h4 className="card-title">{person.name}</h4>
                  <a href="#" className="btn btn-secondary">Make bigger</a>
                </div>
                <div className="card-footer text-muted">Member since: {person.joinYear}</div>
              </div>
            })}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
