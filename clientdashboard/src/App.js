import React, { Component } from 'react';
import Dashboard from './Containers/Dashboard';
import classes from './App.css';

class App extends Component {
  componentWillMount() {
    console.log('');
  }
  render() {
    return (
      <div className={classes.App}>
        <Dashboard />
      </div>
    );
  }
}

export default App;
