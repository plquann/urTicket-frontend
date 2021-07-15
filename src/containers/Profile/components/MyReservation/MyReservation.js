import React, { useState } from 'react';
import { applySortFilter } from 'utils/applySortFilter';
import { getComparator } from 'utils/getComparator';
import {
    Card,
    Stack,
    Table,
    TableBody,
    TableHead,
    TableContainer,
    Avatar,
    Typography,
    Box,
    OutlinedInput,
    InputAdornment,
} from '@material-ui/core';
import TableCell, { tableCellClasses } from '@material-ui/core/TableCell';
import TableRow, { tableRowClasses } from '@material-ui/core/TableRow';
import TableSortLabel, { tableSortLabelClasses } from '@material-ui/core/TableSortLabel';

import Label from 'containers/Admin/components/Label/Label';
import TablePaging from 'containers/Admin/components/TablePaging/TablePaging';
import { sentenceCase } from 'change-case';
import { makeStyles } from '@material-ui/styles';
import { styled } from '@material-ui/core/styles';
import { visuallyHidden } from '@material-ui/utils';

import { reservations } from 'containers/Profile/_mocks_/profile';
import { IconSearch } from 'components/Icons';


const RESERVATIONS = reservations.map(({ movie: name, ...rest }) => ({ name, ...rest }));;

const TABLE_HEAD = [
    { id: 'name', label: 'Movie', alignRight: false },
    { id: 'cinema', label: 'Cinema', alignRight: false },
    { id: 'room', label: 'Room', alignRight: false },
    { id: 'seat', label: 'Seats', alignRight: false },
    { id: 'date', label: 'Date', alignRight: false },
    { id: 'price', label: 'Price', alignRight: false },
    { id: 'status', label: 'Status', alignRight: false },
];

const useStyles = makeStyles({
    root: {
        background: '#1A222A',
        color: '#DBE2FB',
    },
});

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'transparent',
        color: '#DBE2FB',
        fontWeight: '700',
        fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        color: '#DBE2FB',
        borderBottom: '1px solid #2b3d4d',
    },
}));

const StyledTableRow = styled(TableRow)(() => ({
    [`&.${tableRowClasses.root}`]: {
        // border:'0',
    },
}));

const StyledTableSortLabel = styled(TableSortLabel)(() => ({
    [`&.${tableSortLabelClasses.active}`]: {
        color: '#DBE2FB',
        [`&.${tableSortLabelClasses.icon}`]: {
            color: '#ffc033',
            fontSize: 18,
        },
    },
}))

const SearchStyle = styled(OutlinedInput)(() => ({
    width: 240,
    color: '#DBE2FB',
    margin:'10px 0 0 20px',
    background: '#131516',
    '&.Mui-focused': { 
        placeholder: { color: '#000' },
        outlineColor :'#ffc033 !important',
    },
}));

export default function MyReservation() {
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [filterName, setFilterName] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const classes = useStyles();

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        console.log('🚀 ~ file: MyReservation.js ~ line 79 ~ handleRequestSort ~ isAsc', isAsc);
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleFilterByName = (event) => {
        setFilterName(event.target.value);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - RESERVATIONS.length) : 0;

    const filteredData = applySortFilter(RESERVATIONS, getComparator(order, orderBy), filterName);
    const isNotFound = filteredData.length === 0;

    return (
        <>
            <Card className={classes.root}>
                <SearchStyle
                    value={filterName}
                    onChange={handleFilterByName}
                    placeHolder={'Search Reservation...'}
                    startAdornment={
                        <InputAdornment position="start">
                            <Box>
                                <IconSearch width={20} height={20} fillColor={'#C5CBE2'} />
                            </Box>
                        </InputAdornment>
                    }
                />
                <TableContainer sx={{ minWidth: 800 }}>
                    <Table>
                        <TableHead >
                            <TableRow>
                                <StyledTableCell align='center'>
                                    #
                                </StyledTableCell>
                                {TABLE_HEAD.map((headCell) => (
                                    <StyledTableCell
                                        key={headCell.id}
                                        align={headCell.alignRight ? 'right' : 'left'}
                                        sortDirection={orderBy === headCell.id ? order : false}
                                    >
                                        <StyledTableSortLabel

                                            hideSortIcon
                                            active={orderBy === headCell.id}
                                            direction={orderBy === headCell.id ? order : 'asc'}
                                            onClick={(e) => handleRequestSort(e, headCell.id)}
                                        >
                                            {headCell.label}
                                            {orderBy === headCell.id ? (
                                                <Box sx={{ ...visuallyHidden }}>
                                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                                </Box>
                                            ) : null}
                                        </StyledTableSortLabel>
                                    </StyledTableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {filteredData
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const { id, name, cinema, room, posterUrl, seat, date, status, price } = row;

                                    return (
                                        <StyledTableRow
                                            hover
                                            key={id}
                                            tabIndex={-1}
                                            role="checkbox"
                                        >
                                            <StyledTableCell align="center">
                                                {`#${index + 1}`}
                                            </StyledTableCell>
                                            <StyledTableCell component="th" scope="row" padding="none">
                                                <Stack direction="row" alignItems="center" spacing={2}>
                                                    <Avatar alt={name} src={posterUrl} />
                                                    <Typography noWrap>
                                                        {name}
                                                    </Typography>
                                                </Stack>
                                            </StyledTableCell>
                                            <StyledTableCell align="left">{cinema}</StyledTableCell>
                                            <StyledTableCell align="center">{room}</StyledTableCell>
                                            <StyledTableCell align="left">{seat.join(' - ')}</StyledTableCell>
                                            <StyledTableCell align="left">{date}</StyledTableCell>
                                            <StyledTableCell align="left">{price}</StyledTableCell>
                                            <StyledTableCell align="left">
                                                <Label
                                                    variant="filled"
                                                    color={(status === 'expire' && 'error') || (status === 'alive' && 'success')}
                                                >
                                                    {sentenceCase(status)}
                                                </Label>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <StyledTableRow style={{ height: 53 * emptyRows }}>
                                    <StyledTableCell colSpan={6} />
                                </StyledTableRow>
                            )}
                        </TableBody>
                        {
                            isNotFound && (
                                <TableBody>
                                    <StyledTableRow>
                                        <StyledTableCell align="left" colSpan={6} sx={{ py: 3 }}>
                                            NOT FOUND
                                        </StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            )
                        }
                    </Table>
                </TableContainer>
                <TablePaging
                    rowsPerPageOptions={[5, 10, 25]}
                    count={RESERVATIONS.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Card>
        </>
    )
}
