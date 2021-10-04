import React, { useState, useEffect } from 'react';
import { sentenceCase } from 'change-case';
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

const TABLE_HEAD = [
    { id: 'title', label: 'Title', alignRight: false },
    { id: 'duration', label: 'Duration', alignRight: false },
    { id: 'releaseDate', label: 'Release Date', alignRight: false },
    { id: 'rating', label: 'Rating', alignRight: false },
    { id: 'status', label: 'Status', alignRight: false },
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

export default function MoviesDashboard() {
    const [order, setOrder] = useState('asc');
    const [selected, setSelected] = useState([]);
    const [orderBy, setOrderBy] = useState('title');
    const [filterName, setFilterName] = useState('');
    const [totalRows, setTotalRows] = useState(1);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 12,
        searchTerm: '',
    });

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await adminAPI.getAllMovies(pagination);
                console.log('🚀 ~ file: MoviesDashboard.js ~ line 74 ~ res', res);
                setMovies(res.movies);
                setTotalRows(res.totalRow);
            } catch (err) {
                console.log('🚀 ~ file: MoviesDashboard.js ~ line 76 ~ err', err);
            }
        };
        fetchMovies();
    }, [pagination])


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = movies.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        setSelected(selectedIndex(selected, name));
    };

    const handleChangePage = (event, newPage) => {
        // console.log('🚀 ~ file: MoviesDashboard.js ~ line 108 ~ newPage', newPage);
        setPagination({
            ...pagination,
            page: newPage + 1
        });
    };

    const handleFilterByName = (event) => {
        setFilterName(event.target.value);
    };

    const filteredData = applySortFilter(movies, getComparator(order, orderBy), filterName);

    const isNotFound = filteredData.length === 0;

    return (
        <Page title="MOVIES | Admin UI">
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
                                rowCount={movies.length}
                                numSelected={selected.length}
                                onRequestSort={handleRequestSort}
                                onSelectAllClick={handleSelectAllClick}
                            />
                            <TableBody>
                                {filteredData
                                    .map((row) => {
                                        const { id, title, status, duration, posterUrl, releaseDate, voteAverage } = row;
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
                                                    <Stack direction="row" alignItems="center" spacing={2}>
                                                        <Avatar alt={title} src={posterUrl} />
                                                        <Typography variant="subtitle2" >
                                                            {title}
                                                        </Typography>
                                                    </Stack>
                                                </TableCell>
                                                {/* <TableCell align="left">
                                                    {genres.map((item, index) =>
                                                        <Label
                                                            key={index + item}
                                                            variant="ghost"
                                                            color={'default'}
                                                        >
                                                            {sentenceCase(item.name)}
                                                        </Label>)}
                                                </TableCell> */}
                                                <TableCell align="left">{duration + ' minutes'}</TableCell>
                                                <TableCell align="left">{new Date(releaseDate).toDateString()}</TableCell>
                                                <TableCell align="left">
                                                    <Rating name="read-only" value={voteAverage / 2} readOnly />
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Label
                                                        variant="filled"
                                                        color={(status === 'UPCOMING' && 'warning') || (status === 'PLAYING' && 'success') || 'error'}
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
