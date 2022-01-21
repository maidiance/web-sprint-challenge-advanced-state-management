import React, { useEffect, Component } from "react";
import { connect } from 'react-redux';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import SmurfContext from './contexts/SmurfContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { fetchSmurfs } from './actions';

const App = ({loading, smurfs})=> {
  useEffect(()=> {
    fetchSmurfs();
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfContext.Provider value={{loading, smurfs}}>
          <SmurfList/>
          <AddForm/>
        </SmurfContext.Provider>
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    loading: state.loading,
  };
}
export default connect(mapStateToProps)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.