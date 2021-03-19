import React, { Fragment, useContext } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { getAllowedRoutes } from './GetAllowedRoutes';
import { PrivateRoutesConfig } from './';
import MapAllowedRoutes from './MapAllowedRoutes';
import { SideBar } from '../../../layout/sidebar/SideBar';
import { AuthContext } from '../../../views/auth/authState';

function PrivateRoutes() {
  const match = useRouteMatch('/app');
  const context = useContext(AuthContext);
  let allowedRoutes = [];

  if (context.userId) allowedRoutes = getAllowedRoutes(PrivateRoutesConfig, context.userRoles);
  else return <Redirect to="/" />;

  return (
    <Fragment>
      <SideBar routes={allowedRoutes} basePath={match?.path as string} />
      <MapAllowedRoutes routes={allowedRoutes} basePath={match?.path as string} isAddNotFound />
    </Fragment>
  );
}

export default PrivateRoutes;
