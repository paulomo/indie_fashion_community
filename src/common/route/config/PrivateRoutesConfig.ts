import { NonAuthRoutes } from "../roles/RouteEnum";
import { Welcome, About, Terms, StartHere, Collaboration, UserAccount } from '../../../views';
import { SignUp, SignIn, ForgotPassword } from '../../../views/auth';
import { Job } from '../../../views/job/Job';
import { Roles } from './';


export default [
  {
    // component: Welcome,
    path: NonAuthRoutes.base,
    title: '',
    exact: true,
    icon: '',
    iconClosed: '',
    iconOpened: '',
  },
  {
    // component: SignUp,
    path: NonAuthRoutes.signUp,
    title: '',
    icon: '',
    iconClosed: '',
    iconOpened: '',
  },
  {
    // component: SignIn,
    path: NonAuthRoutes.login,
    title: '',
    icon: '',
    iconClosed: '',
    iconOpened: '',
  },
  {
    // component: ForgotPassword,
    path: NonAuthRoutes.forgotPassword,
    title: '',
    icon: '',
    iconClosed: '',
    iconOpened: '',
  },
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