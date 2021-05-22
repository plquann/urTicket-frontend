import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from 'routes';
import Loading from 'components/Loading';
import './App.scss';
import "slick-carousel/slick/slick.css";
import HomeTemplate from 'templates/HomeTemplate';


// console.log("routes", routes);

function App() {
  return (
    <div className="my__app">
      <Suspense fallback={Loading()}>
        <BrowserRouter>
          <Switch>
            {routes.map(({ component: Component, path, ...rest }, index) => {
              return (
                <HomeTemplate component={Component} path={path} key={index} {...rest} />
              );
            })}
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;