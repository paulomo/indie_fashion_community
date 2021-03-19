import React, { Component, ComponentType, LazyExoticComponent, ReactNode } from 'react';
import { memo } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { NotFound } from "../../../views";

export interface IRoute {
  path: string;
  title: string;
  exact: boolean;
  children: LazyExoticComponent<ComponentType<any>>;
  fallback: NonNullable<ReactNode> | null;
  component?: LazyExoticComponent<ComponentType<any>>;
  redirect?: string;
  private?: boolean;
  permission: []
}

export interface AllowedRoutesProps {
  routes: IRoute[];
  basePath: string;
  isAddNotFound: boolean;
}

function MapAllowedRoutes({ routes, basePath, isAddNotFound }: AllowedRoutesProps) {
  const match = useRouteMatch(basePath);
  return (
    <Switch>
      {routes.map((route) => {
        const { path, component, children, title, permission, ...rest } = route;

        return (
          <Route {...rest} key={path} path={`${match?.path}${path}`}>
            <Component children={children} />
          </Route>
        );
      })}
      {isAddNotFound && (
        <Route>
          <NotFound />
        </Route>
      )}
    </Switch>
  );
}

export default memo(MapAllowedRoutes);