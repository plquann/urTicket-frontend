import { lazy } from 'react';

const Movie = lazy(() => import('containers/Movie'));
const NotFound = lazy(() => import('components/NotFound'));
const Admin = lazy(() => import('containers/Admin'));
const News = lazy(() => import('containers/Users/pages/MainNews'));
const Booking = lazy(() => import('containers/Booking'));
const Users = lazy(() => import('containers/Users'));
const SignIn = lazy(() => import('containers/Auth/pages/SignIn'));
const Register = lazy(() => import('containers/Auth/pages/Register'));

export const routes = [
    {
        exact: false,
        path: "/movie",
        component: Movie,
    },
    {
        exact: true,
        path: "/admin",
        component: Admin,
    },
    {
        exact: true,
        path: "/booking",
        component: Booking,
    },
    {
        exact: true,
        path: "/user",
        component: Users,
    },
    {
        exact: true,
        path: "/news",
        component: News,
    },
    {
        exact: true,
        path: "/signin",
        component: SignIn,
    },
    {
        exact: true,
        path: "/register",
        component: Register,
    },
    {
        component: NotFound,
    }
];


