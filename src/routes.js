import { lazy } from 'react';

const Movie = lazy(() => import('containers/Movie/pages/MainPage'));
const Discover = lazy(() => import('containers/Movie/pages/Discover'));
const Details = lazy(() => import('containers/Movie/pages/Details'))
const NotFound = lazy(() => import('components/NotFound'));
const Admin = lazy(() => import('containers/Admin'));
const News = lazy(() => import('containers/Users/pages/MainNews'));

const SeatPlan = lazy(() => import('containers/Booking/pages/SeatPlan'));
const OrderFood = lazy(() => import('containers/Booking/pages/OrderFood'));
const CheckOut = lazy(() => import('containers/Booking/pages/CheckOut'));


const Users = lazy(() => import('containers/Users'));
const SignIn = lazy(() => import('containers/Auth/pages/SignIn'));
const Register = lazy(() => import('containers/Auth/pages/Register'));

const HomeTemplate = lazy(() => import('templates/HomeTemplate'));
const SimpleTemplate = lazy(() => import('templates/SimpleTemplate'));

export const routes = [
    {
        exact: true,
        path: "/",
        component: Movie,
        layout: HomeTemplate
    },
    {
        exact: true,
        path: "/discover",
        component: Discover,
        layout: HomeTemplate
    },
    {
        exact: true,
        path: "/details",
        component: Details,
        layout: HomeTemplate
    },
    {
        exact: true,
        path: "/admin",
        component: Admin,
    },
    {
        exact: true,
        path: "/seatplan",
        component: SeatPlan,
        layout: SimpleTemplate,
    },
    {
        exact: true,
        path: "/orderfood",
        component: OrderFood,
        layout: SimpleTemplate,
    },
    {
        exact: true,
        path: "/checkout",
        component: CheckOut,
        layout: SimpleTemplate,
    },
    {
        exact: true,
        path: "/user",
        component: Users,
        layout: HomeTemplate,
    },
    {
        exact: true,
        path: "/news",
        component: News,
        layout: HomeTemplate
    },
    {
        exact: true,
        path: "/signin",
        component: SignIn,
        layout: SimpleTemplate,
    },
    {
        exact: true,
        path: "/register",
        component: Register,
        layout: SimpleTemplate,
    },
    {
        component: NotFound,
        layout: SimpleTemplate,
    }
];


