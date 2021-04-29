import { lazy } from 'react';

const Movie = lazy(() => import('features/Movie'));
const NotFound = lazy(() => import('components/NotFound'));
const Admin = lazy(() => import('features/Admin'));
const Details = lazy(() => import('features/Movie/pages/MovieDetails'));
const MovieHome = lazy(() => import('features/Movie/pages/MovieHome'));
const Booking = lazy(() => import('features/Booking'));

export const routes = [
    {
        exact: true,
        path: "/",
        component: Movie,
    },
    {
        exact: true,
        path: "/admin",
        component: Admin,
    },
    {
        exact: true,
        path: "/details",
        component: Details,
    },
    {
        exact: true,
        path: "/home",
        component: MovieHome,
    },
    {
        exact: true,
        path: "/booking",
        component: Booking,
    },
    {
        component: NotFound,
    }
];


