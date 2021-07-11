import React from 'react';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
import { fShortenNumber } from 'utils/formatNumber';

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  backgroundImage: `linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)`
}));

export default function AppStatusCard(props) {
  const { total, title, icon } = props;
  return (
    <RootStyle>
      <IconWrapperStyle>
        {/* <Icon icon={icon} width={24} height={24} /> */}
        {/* <IconCinema width={40} height={40} fillColor={'#DBE2FB'} /> */}
        {icon}
      </IconWrapperStyle>
      <Typography variant="h3">{fShortenNumber(total)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </RootStyle>
  );
}
