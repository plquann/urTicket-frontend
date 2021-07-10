import React from 'react';
import PropTypes from 'prop-types';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import {
    Box,
    Toolbar,
    Tooltip,
    IconButton,
    Typography,
    OutlinedInput,
    InputAdornment
} from '@material-ui/core';

const RootStyle = styled(Toolbar)(({ theme }) => ({
    height: 96,
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1, 0, 3)
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
    width: 240,
    transition: theme.transitions.create(['box-shadow', 'width'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
    }),
    '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
    '& fieldset': {
        borderWidth: `1px !important`,
        borderColor: `${theme.palette.grey[500_32]} !important`
    }
}));

UserListToolbar.propTypes = {
    numSelected: PropTypes.number,
    filterName: PropTypes.string,
    onFilterName: PropTypes.func
};

const trash = () => {
    return <i class="fa fa-trash"></i>
}

export default function UserListToolbar({ numSelected, filterName, onFilterName }) {
    return (
        <RootStyle
            sx={{
                ...(numSelected > 0 && {
                    color: 'primary.main',
                    bgcolor: 'primary.lighter'
                })
            }}
        >
            {numSelected > 0 ? (
                <Typography component="div" variant="subtitle1">
                    {numSelected} selected
                </Typography>
            ) : (
                <SearchStyle
                    value={filterName}
                    onChange={onFilterName}
                    placeholder="Search user..."
                    startAdornment={
                        <InputAdornment position="start">
                            <Box component={trash} sx={{ color: 'text.disabled' }} />
                        </InputAdornment>
                    }
                />
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <i class="fa fa-trash"></i>
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <i class="fa fa-filter"></i>
                    </IconButton>
                </Tooltip>
            )}
        </RootStyle>
    );
}
