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
      </div>
    );
}

const mapStateToProps = state => {
  return {
      state,
  }
}

export default connect(mapStateToProps, actions)(App);