import React, { Suspense, useLayoutEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { routes } from 'routes';
import Loading from 'components/Loading';
import './App.scss';
import "slick-carousel/slick/slick.css";
import HomeTemplate from 'templates/HomeTemplate';

// console.log("routes", routes);
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return children || null;
})

function App() {
  return (
    <div className="my__app">
      <BrowserRouter>
        <ScrollToTop>
          <Suspense fallback={Loading()}>
            <Switch>
              <Redirect exact from="/" to="/movie" />
              {routes.map(({ component: Component, path, ...rest }, index) => {
                return (
                  <HomeTemplate Component={Component} path={path} key={index} {...rest} />
                );
              })}
            </Switch>
          </Suspense>
        </ScrollToTop>
      </BrowserRouter>

    </div>
  );
}

export default App;