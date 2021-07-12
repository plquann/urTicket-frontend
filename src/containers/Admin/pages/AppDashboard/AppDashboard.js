import React from 'react';
import { Box, Grid, Container, Typography } from '@material-ui/core';
import Page from 'components/Page/Page';

import AppStatusCard from 'containers/Admin/components/StatusCard/StatusCard';
import WebsiteVisits from 'containers/Admin/components/WebsiteVisits/WebsiteVisits';
import CurrentVisits from 'containers/Admin/components/CurrentVisits/CurrentVisits';
import ConversionRates from 'containers/Admin/components/ConversionRates/ConversionRates';
import CurrentSubject from 'containers/Admin/components/CurrentSubject/CurrentSubject';

import { IconCinema, IconMovie, IconOrder, IconUser } from 'components/Icons';

export default function AppDashboard() {
  return (
    <Page title="Dashboard | Admin-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppStatusCard
              title="TOTAL USERS"
              total="12247"
              icon={<IconUser width={40} height={40} fillColor={'#DBE2FB'} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppStatusCard
              title="TOTAL CINEMAS"
              total="123"
              icon={<IconCinema width={40} height={40} fillColor={'#DBE2FB'} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppStatusCard
              title="TOTAL MOVIES"
              total="2413"
              icon={<IconMovie width={40} height={40} fillColor={'#DBE2FB'} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppStatusCard
              title="TOTAL RESERVATION"
              total="2478"
              icon={<IconOrder width={40} height={40} fillColor={'#DBE2FB'} />}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <WebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <CurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <ConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <CurrentSubject />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
