import { lazy } from 'react';

const Movie = lazy(() => import('features/Movie'));
const NotFound = lazy(() => import('components/NotFound'));
const Admin = lazy(() => import('features/Admin'))
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


