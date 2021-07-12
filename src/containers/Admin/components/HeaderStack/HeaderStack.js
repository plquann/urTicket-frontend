import React from 'react';
import {
    Stack,
    Button,
    Typography,
} from '@material-ui/core';
import { IconPlus } from 'components/Icons';

export default function HeaderStack(props) {
    const { title, newOperator } = props;
    return (
        <>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" gutterBottom>
                    {title}
                </Typography>
                <Button
                    variant="contained"
                    to="#"
                    startIcon={<IconPlus width={22} height={22} fillColor={'#DBE2FB'} />}
                >
                    {newOperator}
                </Button>
            </Stack>

        </>
    )
}
