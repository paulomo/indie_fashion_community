import React, { useContext } from 'react';
import { SideBar } from '../sidebar/SideBar';
import { PrivateRoutesConfig } from '../../common/route/config';
import { Redirect, useRouteMatch } from 'react-router';
import { getAllowedRoutes } from '../../common/route/config/GetAllowedRoutes';
import { AuthContext } from '../../views/auth/authState';
import { AuthNavBar } from '../../views/components/navbar/AuthNavBar';

export interface LayoutProps {
  children?: any;
}

export const AuthLayout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const context = useContext(AuthContext);
  const match = useRouteMatch('/app');
  let allowedRoutes = [];

  if (context.userId) allowedRoutes = getAllowedRoutes(PrivateRoutesConfig, context.userRoles);
  else return <Redirect to="/" />;

  return (
    <React.Fragment>
      <div>
        <nav>
          <AuthNavBar routes={allowedRoutes} basePath={match?.path as string} />
        </nav>
        <main>
          <div>{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
};
