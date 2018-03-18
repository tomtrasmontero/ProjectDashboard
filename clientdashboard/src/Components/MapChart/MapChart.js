import React, { Component } from 'react';
import ReactHighmaps from 'react-highcharts/ReactHighmaps.src';
// import PropTypes from 'prop-types';


class MapChart extends Component {
  componentDidMount() {
    this.chart.Highcharts.setOptions({ lang: { thousandsSep: ',' } });
  }

  render() {
    const config = {
      chart: {
        borderWidth: 1,
      },

      title: {
        text: 'US population density (/km²)',
      },

      exporting: {
        sourceWidth: 600,
        sourceHeight: 500,
      },

      legend: {
        layout: 'horizontal',
        borderWidth: 0,
        backgroundColor: 'rgba(255,255,255,0.85)',
        floating: true,
        verticalAlign: 'top',
        y: 25,
      },

      mapNavigation: {
        enabled: true,
      },

      colorAxis: {
        min: 1,
        type: 'logarithmic',
        minColor: '#EEEEFF',
        maxColor: '#000022',
        stops: [
          [0, '#EFEFFF'],
          [0.67, '#4444FF'],
          [1, '#000022'],
        ],
      },

      series: [{
        type: 'map',
        animation: {
          duration: 1000,
        },
        data: [
          {
            value: 438,
            code: 'nj',
          },
          {
            value: 387.35,
            code: 'ri',
          },
          {
            value: 312.68,
            code: 'ma',
          },
          {
            value: 271.4,
            code: 'ct',
          },
          {
            value: 209.23,
            code: 'md',
          },
          {
            value: 195.18,
            code: 'ny',
          },
          {
            value: 154.87,
            code: 'de',
          },
          {
            value: 114.43,
            code: 'fl',
          },
          {
            value: 107.05,
            code: 'oh',
          },
          {
            value: 105.8,
            code: 'pa',
          },
          {
            value: 86.27,
            code: 'il',
          },
          {
            value: 83.85,
            code: 'ca',
          },
          {
            value: 72.83,
            code: 'hi',
          },
          {
            value: 69.03,
            code: 'va',
          },
          {
            value: 67.55,
            code: 'mi',
          },
          {
            value: 65.46,
            code: 'in',
          },
          {
            value: 63.8,
            code: 'nc',
          },
          {
            value: 54.59,
            code: 'ga',
          },
          {
            value: 53.29,
            code: 'tn',
          },
          {
            value: 53.2,
            code: 'nh',
          },
          {
            value: 51.45,
            code: 'sc',
          },
          {
            value: 39.61,
            code: 'la',
          },
          {
            value: 39.28,
            code: 'ky',
          },
          {
            value: 38.13,
            code: 'wi',
          },
          {
            value: 34.2,
            code: 'wa',
          },
          {
            value: 33.84,
            code: 'al',
          },
          {
            value: 31.36,
            code: 'mo',
          },
        ],
        joinBy: ['postal-code', 'code'],
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          format: '{point.code}',
        },
        name: 'Population density',
        tooltip: {
          pointFormat: '{point.code}: {point.value}/km²',
        },
      }],
    };

    return (
      <ReactHighmaps config={config} ref={(c) => { this.chart = c; }} />
    );
  }
}

// MapChart.propTypes = {
//   mapData: PropTypes.arrayOf(PropTypes.object),
// };
//
// MapChart.defaultProps = {
//   mapData: [],
// };

export default MapChart;
