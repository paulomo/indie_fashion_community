import React, { Suspense, ComponentType } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IRoute } from './IRoute';
// import { user } from '../index';

interface Props {
  authenticated: boolean;
}

const RouteWithSubRoutes = (route: IRoute, { authenticated }: Props) => {
  /** Authenticated flag */
  //   let authenticated: boolean = user.authenticated;

  return (
    <Suspense fallback={route.fallback}>
      <Route
        path={route.path}
        render={(props) =>
          route.redirect ? (
            <Redirect to={route.redirect} />
          ) : route.private ? (
            authenticated ? (
              route.layout && route.component && (<route.layout><route.component {...props} routes={route.routes} /></route.layout>)
            ) : (
              <Redirect to="/home/login" />
            )
          ) : (
            route.layout && route.component && (<route.layout><route.component {...props} routes={route.routes} /></route.layout>)
          )
        }
      />
    </Suspense>
  );
};

export default RouteWithSubRoutes;
