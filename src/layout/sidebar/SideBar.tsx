import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PrivateRoutesConfig } from '../../common/route/config';
import { SubMenu } from './SubMenu';

export interface SidebarProps {
    tittle: string;
    path: string;
    icon: string;
    iconClosed: any;
    iconOpened: any
}

export interface SidebarRoutesProps {
  routes: typeof PrivateRoutesConfig;
  basePath: string;
}

export const SideBar: React.FC<SidebarRoutesProps> = ({routes, basePath}: SidebarRoutesProps) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <React.Fragment>
      <nav>
        <div>
          <NavLink to=""></NavLink>
          {routes.map((item, index) => {
            return (
              <SubMenu
                title={item.title}
                path={item.path}
                icon={item.icon}
                iconClosed={item.iconClosed}
                iconOpened={item.iconOpened}
                key={index}
              />
            );
          })}
        </div>
      </nav>
    </React.Fragment>
  );
};
