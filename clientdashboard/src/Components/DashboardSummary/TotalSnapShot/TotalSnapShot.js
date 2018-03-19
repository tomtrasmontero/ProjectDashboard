import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Statistic } from 'semantic-ui-react';
import classes from './TotalSnapShot.scss';
import * as utility from '../../../utilities/transformData';

const totalSnapShot = (props) => {
  let totalSales = 0;

  props.areaData.forEach((ele) => {
    totalSales += ele[1];
  });

  totalSales = utility.numFormat((totalSales / 1000000).toFixed(0));

  return (
    <Grid centered stretched celled="internally" className={classes.Total}>
      <Grid.Row stretched>
        <Grid.Column computer={8} textAlign="center" verticalAlign="middle">
          <Statistic text>
            <Statistic.Value>{totalSales}M</Statistic.Value>
            <Statistic.Label>Total Sales</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column computer={8} textAlign="center" verticalAlign="middle">
          <Statistic>
            <Statistic.Value>{totalSales}M</Statistic.Value>
            <Statistic.Label>Total Volume</Statistic.Label>
          </Statistic>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row stretched>
        <Grid.Column computer={8} textAlign="center" verticalAlign="middle">
          <Statistic>
            <Statistic.Value>{totalSales * 0.20}M</Statistic.Value>
            <Statistic.Label>Net Income</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column computer={8} textAlign="center" verticalAlign="middle">
          <Statistic>
            <Statistic.Value>15.6%</Statistic.Value>
            <Statistic.Label>Gowth v. PY</Statistic.Label>
          </Statistic>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

totalSnapShot.propTypes = {
  areaData: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default totalSnapShot;
