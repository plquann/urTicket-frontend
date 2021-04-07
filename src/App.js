import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from 'routes';
import Loading from 'components/Loading';
import './App.scss'

// console.log("routes", routes);

function App() {
  return (
    <div className="my__app">
      <Suspense fallback={Loading()}>
        <BrowserRouter>
          <Switch>
            {routes.map(({ component: Component, path, ...rest }) => {
              return (
                <Route component={Component} path={path} key={path} {...rest} />
              );
            })}
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;