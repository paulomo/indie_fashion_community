import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export interface ISideBarRoutes {
  title: string;
  path: string;
}

export const AuthNavBarMenu: React.FC<ISideBarRoutes> = (props: ISideBarRoutes) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  return (
    <React.Fragment>
      <NavLink to={props.path}>
        <div>{props.title}</div>
      </NavLink>
    </React.Fragment>
  );
};
