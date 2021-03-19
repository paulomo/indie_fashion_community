import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export interface ISideBarRoutes {
  title: string;
  path: string;
  icon: any;
  subNav?: ISideBarRoutes[];
  iconClosed: any;
  iconOpened: any;
}

export const SubMenu: React.FC<ISideBarRoutes> = (props: ISideBarRoutes) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  return (
    <React.Fragment>
      <NavLink to={props.path} onClick={props.subNav && showSubnav}>
        <div>
          {props.icon}
          <span>{props.title}</span>
        </div>
        <div>
          {props.subNav && subnav ? props.iconOpened : props.subNav ? props.iconClosed : null}
        </div>
      </NavLink>
      {subnav && props?.subNav?.map((item, index) => {
          return (<NavLink to="" key={index}>{item.icon}<span>{item.title}</span></NavLink>);
      })}
    </React.Fragment>
  );
};
