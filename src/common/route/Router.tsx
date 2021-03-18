import Roles from "./roles/RolesAndDuties";
import { NonAuthRoutes } from "./roles/RouteEnum";
import { Welcome, About, Terms, StartHere, Collaboration, UserAccount } from '../../views';
import { SignUp, SignIn, ForgotPassword } from '../../views/auth';
import { Job } from '../../views/job/Job';


export default [
  {
    component: Welcome,
    path: NonAuthRoutes.base,
    title: '',
    exact: true,
  },
  {
    component: SignUp,
    path: NonAuthRoutes.signUp,
    title: '',
  },
  {
    component: SignIn,
    path: NonAuthRoutes.login,
    title: '',
  },
  {
    component: ForgotPassword,
    path: NonAuthRoutes.forgotPassword,
    title: '',
  },
  {
    component: Collaboration,
    path: NonAuthRoutes.collaboration,
    title: '',
  },
  {
    component: StartHere,
    path: NonAuthRoutes.startHere,
    title: '',
  },
  {
    component: Job,
    path: NonAuthRoutes.job,
    title: '',
  },
  {
    component: About,
    path: NonAuthRoutes.about,
    title: '',
  },
  {
    component: Terms,
    path: NonAuthRoutes.terms,
    title: '',
  },
  // {
  //   component: ,
  //   path: '/module-n',
  //   title: 'Module - N',
  //   permission: [Roles.SUPER_ADMIN, Roles.ADMIN, Roles.MANAGER],
  //   children: [
  //     {
  //       component: ,
  //       path: '/child-1',
  //       title: 'Child - 1',
  //     },
  //     {
  //       component: ,
  //       path: '/child-2',
  //       title: 'Child - 2',
  //     },
  //     {
  //       component: ,
  //       path: '/child-3',
  //       title: 'Child - 3',
  //       permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  //     },
  //   ],
  // },
  // {
  //   component: ,
  //   path: '/dashboard',
  //   title: 'Dashboard',
  //   permission: [Roles.SUPER_ADMIN, Roles.ADMIN],
  // },
  {
    component: UserAccount,
    path: NonAuthRoutes.userAccount,
    title: 'Profile',
    permission: [Roles.CUSTOMER],
  },
];


// import React from 'react';
// import { Switch } from 'react-router-dom';
// import RouteWithSubRoutes from './RouteWithSubRoutes';
// import { IRoute } from './IRoute';

// interface IProps {
//   routes: IRoute[];
// }

// const Router: React.FC<IProps> = ({ routes }) => {
//   return (
//     <Switch>
//       {routes && routes.map((route: IRoute) =>
//       <RouteWithSubRoutes key={route.path} {...route} />)}
//     </Switch>
//   );
// };

// export  {
//   Router
// }
