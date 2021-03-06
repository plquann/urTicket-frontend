import React, { lazy, Suspense, useLayoutEffect } from 'react';
import { HashRouter as Router, Switch, Route, withRouter } from 'react-router-dom';

import Loading from 'components/Loading/Loading';
import { ProtectedRoute, WithLayoutRoute } from './routers';
import { PublicLayout, DashboardLayout } from 'layouts';
const NotFound = lazy(() => import('components/NotFound/NotFound'));

const MainPage = lazy(() => import('containers/Movie/pages/MainPage'));
const Discover = lazy(() => import('containers/Movie/pages/Discover'));
const MovieDetails = lazy(() => import('containers/Movie/pages/Details'))

const SeatPlan = lazy(() => import('containers/Booking/pages/SeatPlan'));
const OrderFood = lazy(() => import('containers/Booking/pages/OrderFood'));
const CheckOut = lazy(() => import('containers/Booking/pages/CheckOut'));

const News = lazy(() => import('containers/News/pages/MainNews'));
const NewsDetails = lazy(() => import('containers/News/pages/NewsDetails'));


const Profile = lazy(() => import('containers/Profile/pages/Me'));
const ChangePassword = lazy(() => import('containers/Profile/pages/ChangePassword/ChangePassword'));
const SignIn = lazy(() => import('containers/Auth/pages/SignIn/SignIn'));
const Register = lazy(() => import('containers/Auth/pages/Register'));
const ForgotPassword = lazy(() => import('containers/Auth/pages/ForgotPassword/ForgotPassword'));


//Admin Dashboard
const AppDashboard = lazy(() => import('containers/Admin/pages/AppDashboard/AppDashboard'));
const MoviesDashboard = lazy(() => import('containers/Admin/pages/MoviesDashboard/MoviesDashboard'));
const UsersDashboard = lazy(() => import('containers/Admin/pages/UsersDashboard/UsersDashboard'));
const NewsDashboard = lazy(() => import('containers/Admin/pages/NewsDashboard/NewsDashboard'));
const ShowtimesDashboard = lazy(() => import('containers/Admin/pages/ShowtimesDashboard/ShowtimesDashboard'));


const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    return children || null;
});

const Routes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Router>
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/login" component={SignIn} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/forgot-password" component={ForgotPassword} />
                        <Route exact path="/profile/change-password" component={ChangePassword} />

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
                            path="/movie/:movieId"
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
                            path="/news/:idArticle"
                            layout={PublicLayout}
                            component={NewsDetails}
                        />

                        <WithLayoutRoute
                            exact
                            path="/booking/:showtimeId/seatplan"
                            component={SeatPlan}
                            layoutProps={{ withFooter: false }}
                            layout={PublicLayout}
                        />

                        <WithLayoutRoute
                            exact
                            path="/booking/:showtimeId/food"
                            component={OrderFood}
                            layoutProps={{ withFooter: false }}
                            layout={PublicLayout}
                        />

                        <WithLayoutRoute
                            exact
                            path="/booking/:showtimeId/checkout"
                            component={CheckOut}
                            layoutProps={{ withFooter: false }}
                            layout={PublicLayout}
                        />

                        <WithLayoutRoute
                            exact
                            path="/profile/:userId"
                            layout={PublicLayout}
                            component={Profile}
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

                        <ProtectedRoute
                            exact
                            path="/admin/news"
                            layout={DashboardLayout}
                            component={NewsDashboard}
                        />

                        <ProtectedRoute
                            exact
                            path="/admin/showtimes"
                            layout={DashboardLayout}
                            component={ShowtimesDashboard}
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
                </ScrollToTop>
            </Router>
        </Suspense>
    );
};

export default Routes;