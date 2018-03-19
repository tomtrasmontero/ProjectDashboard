import React, { Component } from 'react';
import { Select, Header, Segment, Icon, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import TotalSnapShot from './TotalSnapShot/TotalSnapShot';

class dashboardSummary extends Component {
  state = {
    options: [
      { key: 'All', value: 'All', text: 'All Regions' },
      { key: 'West', value: 'West', text: 'West' },
      { key: 'South', value: 'South', text: 'South' },
      { key: 'Northeast', value: 'Northeast', text: 'Northeast' },
      { key: 'Midwest', value: 'Midwest', text: 'Midwest' },
    ],
  }

  handleChange = (e, data) => {
    this.props.changeView(data.value);
  }

  render() {
    return (
      <Segment raised>
        <Header block textAlign="center" inverted color="grey">
          <Icon name="filter" />
          View: {this.props.view}
        </Header>
        <Select
          placeholder="All Sales Team"
          options={this.state.options}
          onChange={this.handleChange}
        />
        <Divider />
        <TotalSnapShot
          salesData={this.props.salesData}
          areaData={this.props.areaData}
        />
      </Segment>
    );
  }
}

dashboardSummary.propTypes = {
  salesData: PropTypes.arrayOf(PropTypes.object),
  areaData: PropTypes.arrayOf(PropTypes.array),
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
};

dashboardSummary.defaultProps = {
  salesData: [],
  areaData: [],
};

export default dashboardSummary;
