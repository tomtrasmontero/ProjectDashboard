import React, { Component } from 'react';
import ReactHighchart from 'react-highcharts';
import PropTypes from 'prop-types';

class DonutChart extends Component {
  componentDidMount() {
    this.chart.Highcharts.setOptions({ lang: { thousandsSep: ',' } });
  }

  render() {
    const donutConfig = {
      title: {
        text: 'Regional Breakdown',
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
          dataLabels: {
            enabled: true,
            distance: -50,
            // format: '<b>{series.name}</b><br/><b>{point.percentage:.1f}%</b>',
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
        data: [...this.props.donutData, {
          name: 'Proprietary or Undetectable',
          y: 0.2,
          dataLabels: {
            enabled: false,
          },
        }],
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
            dataLabels: {
              enabled: false,
            },
          },
        }],
      },
    };

    return (
      <ReactHighchart config={donutConfig} ref={(c) => { this.chart = c; }} />
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
