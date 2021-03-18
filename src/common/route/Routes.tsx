import React from 'react';
import { Router, Switch, Redirect, Route } from 'react-router';
import { createBrowserHistory, History } from 'history';

import { NonAuthRoutes } from './roles/RouteEnum';
import { RouteWithLayout } from './RouteWithLayout';
import { PlainLayout } from '../../layout';
import { Welcome, About, Terms, StartHere, Collaboration, UserAccount } from '../../views';
import { SignUp, SignIn, ForgotPassword } from '../../views/auth';
import { Job } from '../../views/job/Job';


const Routes = () => {
  const history: History = createBrowserHistory();
  return (
    <Router history={history}>
      <Switch>
        {/* <Redirect exact from={NonAuthRoutes.base} to={NonAuthRoutes.welcome} /> */}

        <RouteWithLayout
          Layout={PlainLayout}
          Component={Welcome}
          path={NonAuthRoutes.base}
          exact={true}
          isAuthRequired={false}
          fallback={<div> Loading... </div>}
        />
        <RouteWithLayout
          Layout={PlainLayout}
          Component={About}
          path={NonAuthRoutes.about}
          exact={true}
          isAuthRequired={false}
          fallback={<div> Loading... </div>}
        />
        <RouteWithLayout
          Layout={PlainLayout}
          Component={Terms}
          path={NonAuthRoutes.terms}
          exact={true}
          isAuthRequired={false}
          fallback={<div> Loading... </div>}
        />
        <RouteWithLayout
          Layout={PlainLayout}
          Component={StartHere}
          path={NonAuthRoutes.startHere}
          exact={true}
          isAuthRequired={false}
          fallback={<div> Loading... </div>}
        />
        <RouteWithLayout
          Layout={PlainLayout}
          Component={Job}
          path={NonAuthRoutes.job}
          exact={true}
          isAuthRequired={false}
          fallback={<div> Loading... </div>}
        />
        <RouteWithLayout
          Layout={PlainLayout}
          Component={Collaboration}
          path={NonAuthRoutes.collaboration}
          exact={true}
          isAuthRequired={false}
          fallback={<div> Loading... </div>}
        />

        {/* AUTH */}
        <RouteWithLayout
          Layout={PlainLayout}
          Component={SignUp}
          path={NonAuthRoutes.signUp}
          exact={true}
          isAuthRequired={false}
          fallback={<div> Loading... </div>}
        />
        <RouteWithLayout
          Layout={PlainLayout}
          Component={SignIn}
          path={NonAuthRoutes.login}
          exact={true}
          isAuthRequired={false}
          fallback={<div> Loading... </div>}
        />
        <RouteWithLayout
          Layout={PlainLayout}
          Component={ForgotPassword}
          path={NonAuthRoutes.forgotPassword}
          exact={true}
          isAuthRequired={false}
          fallback={<div> Loading... </div>}
        />

        <RouteWithLayout
          Layout={PlainLayout}
          Component={UserAccount}
          path={NonAuthRoutes.userAccount}
          exact={true}
          isAuthRequired={false}
          fallback={<div> Loading... </div>}
        />
      </Switch>
    </Router>
  );
};

export { Routes };
