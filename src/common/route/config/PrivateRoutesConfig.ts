import { NonAuthRoutes } from "../roles/RouteEnum";
import { Roles } from './';


export default [
  {
    // component: Collaboration,
    path: NonAuthRoutes.collaboration,
    title: 'Collaborations',
    icon: '',
    iconClosed: '',
    iconOpened: '',
  },
  {
    // component: StartHere,
    path: NonAuthRoutes.startHere,
    title: 'Start Here',
    icon: '',
    iconClosed: '',
    iconOpened: '',
  },
  {
    // component: Job,
    path: NonAuthRoutes.job,
    title: 'Jobs',
    icon: '',
    iconClosed: '',
    iconOpened: '',
  },
  {
    // component: About,
    path: NonAuthRoutes.about,
    title: 'About',
    icon: '',
    iconClosed: '',
    iconOpened: '',
    permission: [Roles.ADMIN],
  },
  {
    // component: Terms,
    path: NonAuthRoutes.terms,
    title: 'Terms',
    icon: '',
    iconClosed: '',
    iconOpened: '',
    permission: [Roles.ADMIN],
  },
  {
    // component: UserAccount,
    path: NonAuthRoutes.userAccount,
    title: 'Profile',
    icon: '',
    iconClosed: '',
    iconOpened: '',
    permission: [Roles.CUSTOMER],
  },
];