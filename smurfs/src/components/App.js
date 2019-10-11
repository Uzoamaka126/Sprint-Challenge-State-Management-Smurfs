import React from "react";
import {connect } from 'react-redux'
import "./App.css";
import SmurfsList from './SmurfsList';
import AddSmurfForm from './AddSmurfForm';

import * as actions from '../state/actionCreators';

export function App({ state, handleSubmit, onInputChange, getAllSmurfs }) {
    return (
      <div className="App">
        <AddSmurfForm />
        <SmurfsList />
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
}

const mapStateToProps = state => {
  return {
      state,
  }
}

export default connect(mapToProps, actions)(App);