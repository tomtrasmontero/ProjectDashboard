import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ReactHighstock from 'react-highcharts/ReactHighstock';
import PropTypes from 'prop-types';

class LineAndBarChart extends Component {
  componentDidMount() {
    this.chart.Highcharts.setOptions({ lang: { thousandsSep: ',' } });
  }

  render() {
    const config = {
      rangeSelector: {
        selected: 1,
      },
      credits: false,
      title: {
        text: 'Sales History',
      },
      loading: {
        hideDuration: 1000,
        showDuration: 1000,
      },
      yAxis: [{
        labels: {
          align: 'right',
          x: -3,
        },
        title: {
          text: 'Price',
        },
        height: '60%',
        lineWidth: 2,
        resize: {
          enabled: true,
        },
      }, {
        labels: {
          align: 'right',
          x: -3,
        },
        title: {
          text: 'Volume',
        },
        top: '65%',
        height: '35%',
        offset: 0,
        lineWidth: 2,
      }],
      tooltip: {
        split: true,
      },
      series: [{
        name: 'Sales',
        data: this.props.lineData,
        tooltip: {
          valueDecimals: 0,
        },
      }, {
        type: 'column',
        name: 'Activity',
        data: this.props.areaData,
        tooltip: {
          valueDecimals: 0,
        },
        yAxis: 1,
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            navigator: {
              enabled: false,
            },
          },
        }],
      },
    };

    return (
      <Container id="container" >
        <ReactHighstock config={config} ref={(c) => { this.chart = c; }} />
      </Container>
    );
  }
}

LineAndBarChart.propTypes = {
  lineData: PropTypes.arrayOf(PropTypes.array),
  areaData: PropTypes.arrayOf(PropTypes.array),
};

LineAndBarChart.defaultProps = {
  lineData: [],
  areaData: [],
};

export default LineAndBarChart;
