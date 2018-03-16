import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../hoc/Aux/Aux';
import * as utility from '../utilities/transformData';

class Dashboard extends Component {
  state = {
    lineData: [],
    areaData: [],
    mapsData: [],
    baseUrl: 'http://localhost:8080/',
  }

  componentDidMount() {
    this.getMapsData();
    this.getSalesData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.lineData.length === 0) {
      return false;
    }
    if (nextState.mapsData.length === 0) {
      return false;
    }
    return true;
  }

  getSalesData = async () => {
    const url = `${this.state.baseUrl}sales`;
    const request = await axios.get(url)
      .catch(err => console.log(err, 'error getting data'));

    const [areaData, lineData] = utility.transformChartData(request.data);
    this.setState({ lineData, areaData });
  }

  getMapsData = async () => {
    const url = `${this.state.baseUrl}maps`;
    const request = await axios.get(url)
      .catch(err => console.log(err, 'error getting data'));

    const mapsData = utility.transformMapData(request.data);
    this.setState({ mapsData });
  }

  render() {
    return (
      <Aux>
        <p>Example Background</p>
        <p>{this.state.lineData.length}</p>
        <p>{this.state.areaData.length}</p>
        <p>{this.state.mapsData.length}</p>
      </Aux>
    );
  }
}

export default Dashboard;
