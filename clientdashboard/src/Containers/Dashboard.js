import React, { Component } from 'react';
import axios from 'axios';
import { Container, Grid } from 'semantic-ui-react';
import Aux from '../hoc/Aux/Aux';
import MenuBar from '../Components/MenuBar/MenuBar';
import LineAndBarChart from '../Components/LineAndBarChart/LineAndAreaChart';
import DonutChart from '../Components/DonutChart/DonutChart';
import MapsChart from '../Components/MapChart/MapChart';
import * as utility from '../utilities/transformData';

class Dashboard extends Component {
  state = {
    lineData: [],
    areaData: [],
    mapsData: [],
    donutData: [],
    salesData: [],
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

    const [areaData, lineData, donutData] = utility.transformChartData(request.data);
    this.setState({
      lineData, areaData, donutData, salesData: request.data,
    });
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
        <MenuBar />
        <Container>
          <Grid divided stackable>
            <Grid.Row>
              <Grid.Column stretched largeScreen={16} mobile={16}>
                <LineAndBarChart
                  lineData={this.state.lineData}
                  areaData={this.state.areaData}
                />
              </Grid.Column>
              <Grid.Column stretched largeScreen={16} mobile={16}>
                <Grid.Row divided>
                  <Grid.Row>
                    <p>Data</p>
                  </Grid.Row>
                  <Grid.Row>
                    <MapsChart
                      mapData={this.state.mapsData}
                    />
                  </Grid.Row>
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
            <Grid.Column stretched largeScreen={4} mobile={16}>
              <p>{this.state.mapsData.length}</p>
              <p>{this.state.salesData.length}</p>
            </Grid.Column>
            <Grid.Column stretched largeScreen={12} mobile={16}>
              <DonutChart
                donutData={this.state.donutData}
              />
            </Grid.Column>
          </Grid>
        </Container>
      </Aux>
    );
  }
}

export default Dashboard;
