import { lazy } from 'react';

const Movie = lazy(() => import('features/Movie/Movie'));
const NotFound = lazy(() => import('components/NotFound/NotFound'));
const Admin = lazy(() => import('features/Admin/Admin'))
export const routes = [
    {
        exact: true,
        path: "/",
        component: Movie,
    },
    {
        exact: true,
        path: "/admin",
        component: Admin
    },
    {
        component: NotFound,
    }
];


