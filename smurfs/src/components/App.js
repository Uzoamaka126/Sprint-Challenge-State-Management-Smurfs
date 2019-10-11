import React, { Component } from "react";
import "./App.css";
import SmurfsList from './SmurfsList';
import AddSmurfForm from './AddSmurfForm';

import * as actions from '../state/actionCreators';

class App extends Component {
  constructor({ state, getSmurfs, createNewSmurf, }) {
    super({ state, getSmurfs, createNewSmurf, });
  }
  render() {
    return (
      <div className="App">
        <AddSmurfForm />
        <SmurfsList />
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default App;
