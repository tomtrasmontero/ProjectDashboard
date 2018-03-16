import React, { Component } from 'react';
import Dashboard from './Containers/Dashboard';

class App extends Component {
  componentWillMount() {
    console.log('data');
  }
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
