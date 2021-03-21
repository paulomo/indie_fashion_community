import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { PrivateRoutesConfig } from '../../../common/route/config';
import { AuthNavBarMenu } from './components/AuthNavBarMenu';
import { AuthFirebaseService } from '../../../networking/googleCloud/AuthFirebaseService';
import { AuthContext } from '../../auth/authState';

export interface SidebarProps {
  tittle: string;
  path: string;
}

export interface SidebarRoutesProps {
  routes: typeof PrivateRoutesConfig;
  basePath: string;
}

export const AuthNavBar: React.FC<SidebarRoutesProps> = ({
  routes,
  basePath,
}: SidebarRoutesProps) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const authService = new AuthFirebaseService();
  const { addEmail, addId, addRoles, addIsAuth } = useContext(AuthContext);

  const logOut = () => {
    addEmail('');
    addId('');
    addIsAuth(false);
    addRoles([]);
    authService.signOut();
  };
  return (
    <React.Fragment>
      <nav>
        <NavLink to=""></NavLink>
        <div className="flex justify-end px-40 gap-6 text-base font-semibold h-14 pt-6">
          {routes.map((item, index) => {
            return <AuthNavBarMenu title={item.title} path={item.path} key={index} />;
          })}
          <div>
            <NavLink
              to="/"
              onClick={() => {
                logOut();
              }}
            >
              Sign Out
            </NavLink>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
