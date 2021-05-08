import { lazy } from 'react';

const Movie = lazy(() => import('features/Movie'));
const NotFound = lazy(() => import('components/NotFound'));
const Admin = lazy(() => import('features/Admin'));
const Details = lazy(() => import('features/Movie/pages/MovieDetails'));
const MovieHome = lazy(() => import('features/Movie/pages/MovieHome'));
const Booking = lazy(() => import('features/Booking'));
const CheckOut = lazy(() => import('features/Booking/pages/CheckOut'));
const OrderFood = lazy(() => import('features/Booking/pages/OrderFood'));
const SeatPlan = lazy(() => import('features/Booking/pages/SeatPlan'));
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
        exact: true,
        path: "/seat",
        component: SeatPlan,
    },
    {
        exact: true,
        path: "/food",
        component: OrderFood,
    },
    {
        exact: true,
        path: "/checkout",
        component: CheckOut,
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


