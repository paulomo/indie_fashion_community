import React, { useContext } from 'react';
import { SideBar } from './sidebar/SideBar';
import { PrivateRoutesConfig } from '../common/route/config';
import { Redirect, useRouteMatch } from 'react-router';
import { getAllowedRoutes } from '../common/route/config/GetAllowedRoutes';
import { AuthContext } from '../views/auth/authState';

export interface LayoutProps {
  children?: any;
}

export const AppLayout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const context = useContext(AuthContext);
  const match = useRouteMatch('/app');
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = React.useState(false);
  const [isSidebarCollapsedDesktop, setIsSidebarCollapsedDesktop] = React.useState(false);
  let allowedRoutes = [];

  if (context.userId) allowedRoutes = getAllowedRoutes(PrivateRoutesConfig, context.userRoles);
  else return <Redirect to="/" />;

  function handleSidebarMobileToggle() {
    setIsSidebarOpenMobile(!isSidebarOpenMobile);
  }

  function handleSidebarToggle() {
    // Open/close on mobile
    if (true) {
      setIsSidebarOpenMobile(!isSidebarOpenMobile);
    }
    // Collapse/uncollapse on desktop
    else {
      setIsSidebarCollapsedDesktop(!isSidebarCollapsedDesktop);
    }
  }
  return (
    <React.Fragment>
      <div>
        <aside>
          <SideBar routes={allowedRoutes} basePath={match?.path as string} />
        </aside>
        <main>
          <header></header>
          <div>{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
};
