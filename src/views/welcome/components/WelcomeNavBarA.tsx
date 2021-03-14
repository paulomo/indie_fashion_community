import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NonAuthRoutes } from '../../../common/route/roles/RouteEnum';
import ClothMELogo from '../../common/images/clothme-logo-for-saas.png';

export const WelcomeNavBarA: React.FC = () => {
  return (
    <React.Fragment>
      <div className="font-karla">
        <nav className="flex flex-row fixed justify-between flex-wrap p-4 px-16 w-full bg-white shadow-lg">
          <div className="flex flex-row justify-between">
            <ul className="flex flex-row justify-between gap-4 text-lg font-semibold pt-3">
              <li>
                <NavLink to="#home">
                  <p className="">Start Here</p>
                </NavLink>
              </li>
              <li>
                <Link to="#features">
                  <p className="">Jobs</p>
                </Link>
              </li>
              <li>
                <Link to="#commitment">
                  <p className="">Collaborations</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="pt-1.5">
            <Link to="/wecome">
              <img src={ClothMELogo} className="w-24 h-10" />
            </Link>
          </div>
          <div className="font-semibold  text-lg pt-2">
            <ul className="flex gap-4">
              <div>
                <li>
                  <Link to={NonAuthRoutes.login}>Login</Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to="/sign-up">SignUp</Link>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};
