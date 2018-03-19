import React, { Component } from 'react';
import ReactHighchart from 'react-highcharts';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class DonutChart extends Component {
  componentDidMount() {
    this.chart.Highcharts.setOptions({ lang: { thousandsSep: ',' } });
  }

  render() {
    const config = {
      title: {
        text: '',
        align: 'center',
        verticalAlign: 'middle',
        y: -120,
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      credits: false,
      tooltip: {
        pointFormat: '{series.name}: <b>$ {point.y:,1f}</b><br/><b>{point.percentage:.1f}%</b>',
      },
      loading: {
        hideDuration: 1000,
        showDuration: 1000,
      },
      plotOptions: {
        pie: {
          size: '140%',
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white',
            },
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
        },
      },
      series: [{
        type: 'pie',
        name: 'Sales',
        innerSize: '50%',
        allowPointSelect: true,
        data: [...this.props.donutData],
        dataLabels: {
          enabled: true,
          format: '<b>$ {point.y:,1f}</b><br/><b>{point.percentage:.1f}%</b>',
        },
        yAxis: 1,
        showInLegend: true,
      }],
    };

    return (
      <Segment>
        <ReactHighchart config={config} ref={(c) => { this.chart = c; }} />
      </Segment>
    );
  }
}

DonutChart.propTypes = {
  donutData: PropTypes.arrayOf(PropTypes.array),
};

DonutChart.defaultProps = {
  donutData: [],
};

export default DonutChart;
