import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import ThemeConfig from './theme';


export default function Admin() {
    let match = useRouteMatch();

    return (
        <ThemeConfig>
            This is  admin
        </ThemeConfig>
    )
}
