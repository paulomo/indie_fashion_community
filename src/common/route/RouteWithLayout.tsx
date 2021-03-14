import React, { ReactNode, Suspense, LazyExoticComponent, ComponentType } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { NonAuthRoutes } from './roles/RouteEnum';

interface Props {
  Layout: React.ComponentType<any>;
  Component: React.FC<any> | LazyExoticComponent<ComponentType<any>>;
  path: string;
  exact?: boolean;
  fallback: NonNullable<ReactNode> | null;
  redirect?: string;
  isAuthRequired: boolean;
  requiredRoles?: string[];
  requiredDuties?: string[];
}

const RouteWithLayout = ({
  Layout,
  Component,
  path,
  exact,
  fallback,
  redirect,
  isAuthRequired,
  requiredRoles,
  requiredDuties,
  ...props
}: Props): JSX.Element => {
  let isAuth: Boolean = true;
  const message = 'Please log in to view this page';
  // const { isAuthed }: useContext(userContext)
  // const { userRoles }: useContext(UserContext);
  // const { userDuties }: useContext(UserContext);
  // const userHasRequiredRole = requiredRoles.includes();
  // const userHasRequiredDuty = requiredRoles.includes();
  return (
    <Suspense fallback={fallback}>
      <Route
        path={path}
        render={(props) =>
          redirect ? (
            <Redirect to={redirect} />
          ) : isAuthRequired ? (
            isAuth ? (
              <Layout>
                <Component {...props} />
              </Layout>
            ) : (
              <Redirect to={NonAuthRoutes.base} />
            )
          ) : (
            <Layout>
              <Component />
            </Layout>
          )
        }
      />
    </Suspense>
  );
};

export { RouteWithLayout };
