import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Loading from 'components/Loading/Loading';
import { ProtectedRoute, WithLayoutRoute } from './routers';
import { PublicLayout, DashboardLayout } from 'layouts';

const MainPage = lazy(() => import('containers/Movie/pages/MainPage'));
const Discover = lazy(() => import('containers/Movie/pages/Discover'));
const MovieDetails = lazy(() => import('containers/Movie/pages/Details'))
const NotFound = lazy(() => import('components/NotFound/NotFound'));
const News = lazy(() => import('containers/Users/pages/MainNews'));

const SeatPlan = lazy(() => import('containers/Booking/pages/SeatPlan'));
const OrderFood = lazy(() => import('containers/Booking/pages/OrderFood'));
const CheckOut = lazy(() => import('containers/Booking/pages/CheckOut'));


const Users = lazy(() => import('containers/Users'));
const SignIn = lazy(() => import('containers/Auth/pages/SignIn'));
const Register = lazy(() => import('containers/Auth/pages/Register'));


//Admin Dashboard
const AppDashboard = lazy(() => import('containers/Admin/pages/AppDashboard/AppDashboard'));
const MoviesDashboard = lazy(() => import('containers/Admin/pages/MoviesDashboard/MoviesDashboard'));
const UsersDashboard = lazy(() => import('containers/Admin/pages/UsersDashboard/UsersDashboard'));

const Routes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Router>
                <Switch>
                    <Route exact path="/login" component={SignIn} />
                    <Route exact path="/register" component={Register} />

                    <WithLayoutRoute
                        exact
                        path="/"
                        layout={PublicLayout}
                        component={MainPage}
                    />

                    <WithLayoutRoute
                        exact
                        path="/movie/discover"
                        layout={PublicLayout}
                        component={Discover}
                    />

                    <WithLayoutRoute
                        exact
                        path="/movie/:id"
                        layout={PublicLayout}
                        component={MovieDetails}
                    />

                    <WithLayoutRoute
                        exact
                        path="/news"
                        layout={PublicLayout}
                        component={News}
                    />

                    <WithLayoutRoute
                        exact
                        path="/booking/:reservationId/seatplan"
                        component={SeatPlan}
                        layout={PublicLayout}
                    />

                    <WithLayoutRoute
                        exact
                        path="/booking/:reservationId/food"
                        component={OrderFood}
                        layout={PublicLayout}
                    />

                    <WithLayoutRoute
                        exact
                        path="/booking/:reservationId/checkout"
                        component={CheckOut}
                        layout={PublicLayout}
                    />

                    <WithLayoutRoute
                        exact
                        path="/profile/:userId"
                        layout={PublicLayout}
                        component={Users}
                    />

                    {/* <WithLayoutRoute
                        exact
                        path="/movie/category/:category"
                        layout={PublicLayout}
                        component={MovieCategoryPage}
                    />

                    <WithLayoutRoute
                        exact
                        path="/movie/booking/:id"
                        layout={PublicLayout}
                        layoutProps={{ withFooter: false }}
                        component={BookingPage}
                    /> */}

                    <ProtectedRoute
                        exact
                        path="/admin/dashboard"
                        layout={DashboardLayout}
                        component={AppDashboard}
                    />
                    <ProtectedRoute
                        exact
                        path="/admin/users"
                        layout={DashboardLayout}
                        component={UsersDashboard}
                    />

                    <ProtectedRoute
                        exact
                        path="/admin/movies"
                        layout={DashboardLayout}
                        component={MoviesDashboard}
                    />

                    {/* <ProtectedRoute
                        exact
                        path="/admin/showtimes"
                        layout={AdminLayout}
                        component={ShowtimeList}
                    />
                    <ProtectedRoute
                        exact
                        path="/admin/reservations"
                        layout={AdminLayout}
                        component={ReservationList}
                    />
                    <ProtectedRoute
                        exact
                        path="/admin/cinemas"
                        layout={AdminLayout}
                        component={CinemaList}
                    />

                    <ProtectedRoute
                        exact
                        path="/admin/account"
                        layout={AdminLayout}
                        component={Account}
                    /> */}
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </Suspense>
    );
};

export default Routes;