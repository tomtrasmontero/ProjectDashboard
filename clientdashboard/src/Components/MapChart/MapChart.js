import React, { Component } from 'react';
import ReactHighmaps from 'react-highcharts/ReactHighmaps.src';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import mapLayout from '../../utilities/mapLayoutUS';

class MapChart extends Component {
  componentDidMount() {
    this.chart.Highcharts.setOptions({ lang: { thousandsSep: ',' } });
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.mapsData.length > this.props.mapsData.length) {
      return true;
    }
    return false;
  }

  render() {
    let config = {};
    if (this.props.mapsData.length > 0) {
      config = {
        chart: {
          map: mapLayout,
          borderWidth: 0,
        },

        credits: false,
        title: {
          text: '',
        },

        legend: {
          layout: 'vertical',
          borderWidth: 0,
          backgroundColor: 'rgba(255,255,255,0.85)',
          floating: false,
          verticalAlign: 'top',
          reversed: true,
          align: 'left',
        },

        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom',
          },
        },

        colorAxis: {
          min: 0,
        },

        series: [{
          type: 'map',
          animation: {
            duration: 1000,
          },
          data: this.props.mapsData,
          states: {
            hover: {
              color: '#BADA55',
            },
          },
          dataLabels: {
            enabled: true,
            color: '#FFFFFF',
            format: '{point.name}',
          },
          name: 'US Sales',
          tooltip: {
            pointFormat: '{point.code}: $ {point.value}',
          },
        }],
      };
    }

    return (
      <Segment>
        <ReactHighmaps config={config} ref={(c) => { this.chart = c; }} />;
      </Segment>
    );
  }
}

MapChart.propTypes = {
  mapsData: PropTypes.arrayOf(PropTypes.array),
};

MapChart.defaultProps = {
  mapsData: [],
};

export default MapChart;
