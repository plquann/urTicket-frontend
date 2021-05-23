import { lazy } from 'react';

const Movie = lazy(() => import('features/Movie'));
const NotFound = lazy(() => import('components/NotFound'));
const Admin = lazy(() => import('features/Admin'));
const News = lazy(() => import('features/Users/pages/MainNews'));
const Booking = lazy(() => import('features/Booking'));
const Users = lazy(() => import('features/Users'));
const SignIn = lazy(() => import('features/Auth/pages/SignIn'));
const Register = lazy(() => import('features/Auth/pages/Register'));

export const routes = [
    {
        exact: true,
        path: "/",
        component: Movie,
    },
    {
        exact: true,
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


