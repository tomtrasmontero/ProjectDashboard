import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './Containers/Dashboard/Dashboard';
import DetailTrx from './Containers/DetailTrx/DetailTrx';
import MenuBar from './Components/MenuBar/MenuBar';
import Aux from './hoc/Aux/Aux';

class App extends Component {
  componentWillMount() {
    console.log('');
  }
  render() {
    const routes = (
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/detail" exact component={DetailTrx} />
        <Redirect to="/dashboard" />
      </Switch>
    );
    return (
      <Aux>
        <MenuBar />
        {routes}
      </Aux>
    );
  }
}

export default App;
