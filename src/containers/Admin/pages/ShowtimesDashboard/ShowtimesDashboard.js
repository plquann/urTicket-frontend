import React, { useState, useEffect } from 'react';
import {
    Card,
    Table,
    Stack,
    Checkbox,
    TableBody,
    Container,
    Typography,
    TableContainer,
    IconButton,
} from '@material-ui/core';
import MuiTableCell from '@material-ui/core/TableCell';
import MuiTableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/styles';
import { adminAPI } from 'apis';

import HeaderStack from 'containers/Admin/components/HeaderStack/HeaderStack';
import ListToolbar from 'containers/Admin/components/ListToolbar/ListToolbar';
import ListHead from 'containers/Admin/components/ListHead/ListHead';
import Label from 'containers/Admin/components/Label/Label';
import SearchNotFound from 'containers/Admin/components/SearchNotFound/SearchNotFound';
import TablePaging from 'containers/Admin/components/TablePaging/TablePaging';

import { selectedIndex } from 'utils/selectedIndex';
import { applySortFilter } from 'utils/applySortFilter';
import { getComparator } from 'utils/getComparator';
import { IconEdit, IconTrash } from 'components/Icons';
import Page from 'components/Page/Page';
import dateFormat from 'dateformat';
import CreateShowtime from 'containers/Admin/components/DialogCreateShowtime/CreateShowtime';

const TABLE_HEAD = [
    { id: 'movie', label: 'Movie', alignRight: false },
    { id: 'cinema', label: 'Cinema', alignRight: false },
    { id: 'room', label: 'Room', alignRight: false },
    { id: 'schedule', label: 'Schedule', alignRight: false },
    { id: 'date', label: 'Date', alignRight: false },
    { id: '' }
];

const TableCell = withStyles({
    root: {
        borderBottom: '1px solid #2b3d4d',
    }
})(MuiTableCell);

const TableRow = withStyles({
    root: {
        cursor: 'pointer'
    },
    selected: {
        backgroundColor: 'rgb(147 175 161 / 25%) !important'
    }
})(MuiTableRow);

export default function ShowtimesDashboard() {
    const [order, setOrder] = useState('asc');
    const [selected, setSelected] = useState([]);
    const [orderBy, setOrderBy] = useState('movie');
    const [filterName, setFilterName] = useState('');
    const [totalRows, setTotalRows] = useState(1);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 12,
    });

    const [showtimes, setShowtimes] = useState([]);

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setIsDialogOpen(!isDialogOpen);
    };

    useEffect(() => {
        const fetchShowtimes = async () => {
            try {
                const res = await adminAPI.getAllShowtimes(pagination);
                setShowtimes(res.showtimes);
                setTotalRows(res.totalRow);
            } catch (err) {
                console.log('🚀 ~ file: ShowtimesDashboard.js ~ line 78 ~ err', err);
            }
        };
        fetchShowtimes();
    }, [pagination])


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = showtimes.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        setSelected(selectedIndex(selected, name));
    };

    const handleChangePage = (event, newPage) => {
        setPagination({
            ...pagination,
            page: newPage + 1
        });
    };

    const handleFilterByName = (event) => {
        setFilterName(event.target.value);
    };

    const filteredData = applySortFilter(showtimes, getComparator(order, orderBy), filterName);

    const isNotFound = filteredData.length === 0;

    return (
        <Page title="SHOWTIMES | Admin UI">
            <Container>
                <HeaderStack title={'Showtimes'} newOperator={'New Showtime'} handleDialogOpen={handleDialogOpen}/>
                <CreateShowtime open={isDialogOpen} handleDialogOpen={handleDialogOpen}/>
                <Card>
                    <ListToolbar
                        numSelected={selected.length}
                        filterName={filterName}
                        onFilterName={handleFilterByName}
                        placeHolder={'Search Movie...'}
                    />
                    <TableContainer sx={{ minWidth: 800 }}>
                        <Table>
                            <ListHead
                                order={order}
                                orderBy={orderBy}
                                headLabel={TABLE_HEAD}
                                rowCount={showtimes.length}
                                numSelected={selected.length}
                                onRequestSort={handleRequestSort}
                                onSelectAllClick={handleSelectAllClick}
                            />
                            <TableBody>
                                {filteredData
                                    .map((row) => {
                                        const { id, movie, theater, startTime, endTime, room } = row;
                                        const isItemSelected = selected.indexOf(id) !== -1;

                                        return (
                                            <TableRow
                                                hover
                                                key={id}
                                                tabIndex={-1}
                                                role="checkbox"
                                                selected={isItemSelected}
                                                aria-checked={isItemSelected}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        checked={isItemSelected}
                                                        onChange={(event) => handleClick(event, id)}
                                                    />
                                                </TableCell>
                                                <TableCell component="th" scope="row" padding="none">
                                                    <Stack direction="row" alignItems="center" spacing={1}>
                                                        <Typography variant="subtitle2" >
                                                            {movie.title}
                                                        </Typography>
                                                    </Stack>
                                                </TableCell>
                                                <TableCell align="left">{theater.name}</TableCell>
                                                <TableCell align="left">
                                                    <Label
                                                        variant="filled"
                                                        color={'success'}
                                                    >
                                                        {room}
                                                    </Label>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Label
                                                        variant="filled"
                                                        color={'warning'}
                                                    >
                                                        {`${dateFormat(startTime, 'HH:MM')} ~ ${dateFormat(endTime, 'HH:MM')}`}
                                                    </Label>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Label
                                                        variant="filled"
                                                        color={'default'}
                                                    >
                                                        {dateFormat(startTime, 'yyyy-mm-dd')}
                                                    </Label>
                                                </TableCell>
                                                {/* <TableCell align="left">
                                                    <Label
                                                        variant="filled"
                                                        color={ 'warning'}
                                                    >
                                                        {dateFormat(startTime, 'yyyy-mm-dd')}
                                                    </Label>
                                                </TableCell> */}
                                                <TableCell align="right">
                                                    <IconButton aria-label="delete">
                                                        <IconEdit width={24} height={24} fillColor={'#637381'} />
                                                    </IconButton>
                                                    <IconButton aria-label="delete">
                                                        <IconTrash width={24} height={24} fillColor={'#637381'} />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {/* {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )} */}
                            </TableBody>
                            {
                                isNotFound && (
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                                                <SearchNotFound searchQuery={filterName} />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                )
                            }
                        </Table>
                    </TableContainer>

                    <TablePaging
                        rowsPerPageOptions={[6, 12, 24]}
                        count={totalRows}
                        rowsPerPage={pagination.limit}
                        page={pagination.page - 1}
                        onPageChange={handleChangePage}
                    // onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Card>
            </Container>
        </Page>
    );
}
