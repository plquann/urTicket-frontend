import React from 'react';
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
import { fShortenNumber } from '../../../utils/formatNumber';
import { Heart } from 'components/Icons';

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.error.darker,
    backgroundColor: theme.palette.error.lighter
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
    color: theme.palette.error.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
        theme.palette.error.dark,
        0.24
    )} 100%)`
}));


export default function StatusCard(props) {
    const { icon, count, title } = props;
    return (
        <RootStyle>
            <IconWrapperStyle>
                {/* <Heart width={24} height={24} /> */}
                <Heart fill="#f1481f"/>
            </IconWrapperStyle>
            <Typography variant="h3">{fShortenNumber(count)}</Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                {title}
            </Typography>
        </RootStyle>
    );
}
