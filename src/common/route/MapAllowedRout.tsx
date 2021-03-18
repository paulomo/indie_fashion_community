import React, { Component, ComponentType, LazyExoticComponent, ReactNode } from 'react';
import { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from "../../views";

export interface IRoute {
  path: string;
  title: string;
  exact: boolean;
  children: LazyExoticComponent<ComponentType<any>>;
  fallback: NonNullable<ReactNode> | null;
  component?: LazyExoticComponent<ComponentType<any>>;
  redirect?: string;
  private?: boolean;
  layout?: LazyExoticComponent<ComponentType<any>>;
  permission: []
}

export interface Props {
  routes: [IRoute];
  isAddNotFound: string;
}

function MapAllowedRoutes({ routes, isAddNotFound }: Props) {
  return (
    <Switch>
      {routes.map((route) => {
        const { path, component, children, title, permission, ...rest } = route;

        return (
          <Route {...rest} key={path} path={`${path}`}>
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