import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { getAllowedRoutes, isLoggedIn } from './GetAllowedRoutes';
import { PrivateRoutesConfig } from './';
import MapAllowedRoutes from './MapAllowedRoutes';

function PrivateRoutes() {
  let allowedRoutes = [];

  if (isLoggedIn()) allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);
  else return <Redirect to="/" />;

  return (
    <Fragment>
      <MapAllowedRoutes routes={allowedRoutes} isAddNotFound />
    </Fragment>
  );
}

export default PrivateRoutes;
