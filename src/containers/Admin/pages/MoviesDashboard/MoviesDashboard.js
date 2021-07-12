import React from 'react';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import {
    Card,
    Table,
    Stack,
    Avatar,
    Checkbox,
    TableBody,
    Container,
    Typography,
    TableContainer,
    IconButton,
    Rating
} from '@material-ui/core';
import MuiTableCell from '@material-ui/core/TableCell';
import MuiTableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/styles';

import HeaderStack from 'containers/Admin/components/HeaderStack/HeaderStack';
import ListToolbar from 'containers/Admin/components/ListToolbar/ListToolbar';
import ListHead from 'containers/Admin/components/ListHead/ListHead';
import Label from 'containers/Admin/components/Label/Label';
import SearchNotFound from 'containers/Admin/components/SearchNotFound/SearchNotFound';
import TablePaging from 'containers/Admin/components/TablePaging/TablePaging';

import MOVIESLIST from '../../_mocks_/movies';
import { selectedIndex } from 'utils/selectedIndex';
import { applySortFilter } from 'utils/applySortFilter';
import { getComparator } from 'utils/getComparator';
import { IconEdit, IconTrash } from 'components/Icons';
import Page from 'components/Page/Page';

const TABLE_HEAD = [
    { id: 'name', label: 'Name', alignRight: false },
    { id: 'genre', label: 'Genres', alignRight: false },
    { id: 'duration', label: 'Duration', alignRight: false },
    { id: 'releaseDate', label: 'Release Date', alignRight: false },
    { id: 'rating', label: 'Rating', alignRight: false },
    { id: 'status', label: 'Status', alignRight: false },
    { id: '' }
];

const TableCell = withStyles({
    root: {
        borderBottom: 'none'
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

export default function MoviesDashboard() {
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [selected, setSelected] = useState([]);
    const [orderBy, setOrderBy] = useState('name');
    const [filterName, setFilterName] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = MOVIESLIST.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        setSelected(selectedIndex(selected, name));
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

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - MOVIESLIST.length) : 0;

    const filteredData = applySortFilter(MOVIESLIST, getComparator(order, orderBy), filterName);

    const isNotFound = filteredData.length === 0;

    return (
        <Page title="Movies | Admin UI">
            <Container>
                <HeaderStack title={'Movies'} newOperator={'New Movie'} />

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
                                rowCount={MOVIESLIST.length}
                                numSelected={selected.length}
                                onRequestSort={handleRequestSort}
                                onSelectAllClick={handleSelectAllClick}
                            />
                            <TableBody>
                                {filteredData
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        const { id, name, genre, status, duration, posterUrl, releaseDate, rating } = row;
                                        const isItemSelected = selected.indexOf(name) !== -1;

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
                                                        onChange={(event) => handleClick(event, name)}
                                                    />
                                                </TableCell>
                                                <TableCell component="th" scope="row" padding="none">
                                                    <Stack direction="row" alignItems="center" spacing={2}>
                                                        <Avatar alt={name} src={posterUrl} />
                                                        <Typography variant="subtitle2" noWrap>
                                                            {name}
                                                        </Typography>
                                                    </Stack>
                                                </TableCell>
                                                <TableCell align="left">
                                                    {genre.map((item, index) =>
                                                        <Label
                                                            key={index + item}
                                                            variant="ghost"
                                                            color={'default'}
                                                        >
                                                            {sentenceCase(item)}
                                                        </Label>)}
                                                </TableCell>
                                                <TableCell align="left">{duration + ' minutes'}</TableCell>
                                                <TableCell align="left">{releaseDate}</TableCell>
                                                <TableCell align="left">
                                                    <Rating name="read-only" value={rating} readOnly />
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Label
                                                        variant="filled"
                                                        color={(status === 'coming' && 'warning') || (status === 'showing' && 'success') || 'error'}
                                                    >
                                                        {sentenceCase(status)}
                                                    </Label>
                                                </TableCell>
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
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
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
                        rowsPerPageOptions={[5, 10, 25]}
                        count={MOVIESLIST.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Card>
            </Container>
        </Page>
    );
}
