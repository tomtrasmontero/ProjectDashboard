import React, { Component } from 'react';
import axios from 'axios';
import { Container, Grid, Header, Segment } from 'semantic-ui-react';
import Aux from '../../hoc/Aux/Aux';
import LineAndBarChart from '../../Components/LineAndBarChart/LineAndAreaChart';
import DonutChart from '../../Components/DonutChart/DonutChart';
import MapsChart from '../../Components/MapChart/MapChart';
import DashboardSummary from '../../Components/DashboardSummary/DashboardSummary';
import * as utility from '../../utilities/transformData';
import classes from './Dashboard.scss';

class Dashboard extends Component {
  state = {
    lineData: [],
    areaData: [],
    mapsData: [],
    donutData: [],
    salesData: [],
    baseUrl: 'http://localhost:8080/',
    view: 'All',
  }

  componentDidMount() {
    this.getMapsData();
    this.getSalesData(this.state.view);
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

  getSalesData = async (viewRegion) => {
    let url = `${this.state.baseUrl}sales`;
    if (viewRegion !== 'All') {
      url = `${this.state.baseUrl}sales/region/${viewRegion}`;
    }

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

    const mapsData = await utility.transformMapData(request.data);
    this.setState({ mapsData });
  }

  updateView = (regionName) => {
    this.getSalesData(regionName);
    this.setState({ view: regionName });
  }

  render() {
    return (
      <Aux>
        <Container className={classes.Dashboard}>
          <Grid stackable color="grey">
            <Grid.Row>
              <Grid.Column stretched largeScreen={11} mobile={16}>
                <Segment raised>
                  <Header block textAlign="center" inverted color="grey">Sales History</Header>
                  <LineAndBarChart
                    lineData={this.state.lineData}
                    areaData={this.state.areaData}
                    view={this.state.view}
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column stretched largeScreen={5} mobile={16}>
                <DashboardSummary
                  salesData={this.state.salesData}
                  areaData={this.state.areaData}
                  changeView={regionName => this.updateView(regionName)}
                  view={this.state.view}
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
