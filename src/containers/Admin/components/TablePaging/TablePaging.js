import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TablePagination } from '@material-ui/core';

const useStylesPaperPage = makeStyles({
    table: {
        minWidth: 500
    },
    selectDropdown: { color: '#C4CDD5', backgroundColor: '#131516', boxShadow: 'none' },
    menuItem: {
        '&:hover': {
            backgroundColor: '#3b3f58'
        }
    }
});


export default function TablePaging(props) {
    const { rowsPerPageOptions, rowsPerPage, count, page, onPageChange, onRowsPerPageChange } = props;
    const classes = useStylesPaperPage();

    return (
        <TablePagination
            rowsPerPageOptions={rowsPerPageOptions}
            component="div"
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
            classes={{ menuItem: classes.menuItem }}
            SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                MenuProps: { classes: { paper: classes.selectDropdown } }
            }}
        />
    )
}
