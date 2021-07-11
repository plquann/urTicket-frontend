import React from 'react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { Box, Card, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { fNumber } from 'utils/formatNumber';
import BaseOptionChart from '../BaseOptionChart/BaseOptionChart';

const CHART_DATA = [{ data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }];

const useStyles = makeStyles({
  root: {
    background: '#191C24'
  }
});

export default function ConversionRates() {
  const classes = useStyles();
  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `#${seriesName}`
        }
      }
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '28%', borderRadius: 2 }
    },
    xaxis: {
      categories: [
        'Italy',
        'Japan',
        'China',
        'Canada',
        'France',
        'Germany',
        'South Korea',
        'Netherlands',
        'United States',
        'United Kingdom'
      ]
    }
  });

  return (
    <Card className={classes.root}>
      <CardHeader title="Conversion Rates" subheader="(+43%) than last year" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
