import React, { lazy, Suspense } from 'react';
import { useRouteMatch } from 'react-router';
import Loading from 'components/Loading';
import HomeTemplate from 'templates/HomeTemplate';
import { BrowserRouter, Switch } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/MainPage'));
const NotFound = lazy(() => import('components/NotFound'));
const Details = lazy(() => import('./pages/Details'));
const Discover = lazy(() => import('./pages/Discover'));

export default function Movie() {
    const match = useRouteMatch();
    console.log("🚀 ~ match", match);

    return (
        <BrowserRouter>
            <Suspense fallback={Loading()}>
                <Switch>
                    {/* <HomeTemplate Component={Component} path={path} key={index} {...rest} /> */}
                    <HomeTemplate exact path={match.url} Component={MainPage} />
                    <HomeTemplate exact path={`${match.url}/discover`} Component={Discover} />
                    <HomeTemplate exact path={`${match.url}/:movieId`} Component={Details} />
                    <HomeTemplate Component={NotFound} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )

}
