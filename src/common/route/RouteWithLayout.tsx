import React, { useContext, ReactNode, Suspense, LazyExoticComponent, ComponentType } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../views/auth/authState';
import { NonAuthRoutes } from './roles';

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
  const { isAuth, userId, userRoles, userEmail } = useContext(AuthContext)
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
