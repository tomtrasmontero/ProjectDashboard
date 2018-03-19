import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import ReactHighstock from 'react-highcharts/ReactHighstock';
import PropTypes from 'prop-types';

class LineAndBarChart extends Component {
  componentDidMount() {
    this.chart.Highcharts.setOptions({ lang: { thousandsSep: ',' } });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.areaData !== this.props.areaData &&
    nextProps.lineData.length > 0) {
      console.log('updated');
      this.chart.chart.series[0].redraw();
    }
  }

  shouldComponentUpdate(nextProps) {
    let check = false;
    if (nextProps.lineData === this.props.lineData) {
      check = true;
    } else if (nextProps.areaData !== this.props.areaData) {
      check = true;
    }

    return check;
  }

  render() {
    const config = {
      rangeSelector: {
        selected: 1,
      },
      credits: false,
      title: {
        text: '',
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
          text: 'Sales',
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
        type: 'area',
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

    const chart = <ReactHighstock config={config} ref={(c) => { this.chart = c; }} />;

    return (
      <Container as={Segment} id="container" >
        {chart}
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
