import React, { Suspense, useLayoutEffect } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
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
      <Suspense fallback={Loading()}>
        <BrowserRouter>
          <ScrollToTop>
            <Switch>
              {routes.map(({ component: Component, path, ...rest }, index) => {
                return (
                  <Route component={Component} path={path} key={index} {...rest} />
                );
              })}
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;