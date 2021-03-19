import { NonAuthRoutes } from "../roles/RouteEnum";
import { Welcome, About, Terms, StartHere, Collaboration, UserAccount } from '../../../views';
import { SignUp, SignIn, ForgotPassword } from '../../../views/auth';
import { Job } from '../../../views/job/Job';
import { Roles } from './';


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
  {
    component: UserAccount,
    path: NonAuthRoutes.userAccount,
    title: 'Profile',
    permission: [Roles.CUSTOMER],
  },
];