import React from 'react';
import { Switch, Redirect } from 'react-router';
import { NonAuthRoutes } from './roles/RouteEnum';
import { RouteWithLayout } from './RouteWithLayout';
import { MainLayout, PlainLayout } from '../../layout';
import { Welcome, About, Terms, StartHere, Collaboration, UserAccount, Job, PostJob } from '../../views';
import { SignUp, SignIn, ForgotPassword } from '../../views/auth';
import { AppLayout } from '../../layout/AppLayout';

const Routes = () => {
  return (
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
        Layout={AppLayout}
        Component={UserAccount}
        path={NonAuthRoutes.userAccount}
        exact={true}
        isAuthRequired={true}
        fallback={<div> Loading... </div>}
      />

      {/* JOB */}
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
        Component={PostJob}
        path={NonAuthRoutes.postNewJob}
        exact={true}
        isAuthRequired={false}
        fallback={<div> Loading... </div>}
      />
    </Switch>
  );
};

export { Routes };
