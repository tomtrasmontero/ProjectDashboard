import React, { Component } from 'react';
import axios from 'axios';
import { Container, Grid, Header, Segment } from 'semantic-ui-react';
import Aux from '../hoc/Aux/Aux';
import MenuBar from '../Components/MenuBar/MenuBar';
import LineAndBarChart from '../Components/LineAndBarChart/LineAndAreaChart';
import DonutChart from '../Components/DonutChart/DonutChart';
import MapsChart from '../Components/MapChart/MapChart';
import DashboardSummary from '../Components/DashboardSummary/DashboardSummary';
import * as utility from '../utilities/transformData';
import classes from './Dashboard.scss';

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
        <Container className={classes.Dashboard}>
          <Grid divided stackable color="grey">
            <Grid.Row>
              <Grid.Column stretched largeScreen={11} mobile={16}>
                <Segment raised>
                  <Header block textAlign="center" inverted color="grey">Sales History</Header>
                  <LineAndBarChart
                    lineData={this.state.lineData}
                    areaData={this.state.areaData}
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column stretched largeScreen={5} mobile={16}>
                <DashboardSummary
                  salesData={this.state.salesData}
                  areaData={this.state.areaData}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column stretched largeScreen={6} mobile={16}>
                <Segment raised>
                  <Header
                    block
                    textAlign="center"
                    inverted
                    color="grey"
                  > Sales by Regional Team
                  </Header>
                  <DonutChart
                    donutData={this.state.donutData}
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column stretched largeScreen={10} mobile={16}>
                <Segment raised>
                  <Header
                    block
                    textAlign="center"
                    inverted
                    color="grey"
                  >US Sales Distribution
                  </Header>
                  <MapsChart
                    mapsData={this.state.mapsData}
                  />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Aux>
    );
  }
}

export default Dashboard;
