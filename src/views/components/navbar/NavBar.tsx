import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NonAuthRoutes } from '../../../common/route/roles/RouteEnum';
import { DEFAULT_THEME } from "../../../theme";
import { applyTheme } from "../../../theme/utils";

export const NavBar: React.FC = () => {


  return (
    <React.Fragment>
      <div className="font-karla pb-28">
        <nav className="flex flex-row fixed justify-between flex-wrap p-4 px-16 w-full bg-sec-background shadow-lg">
          <div className="flex flex-row justify-between">
            <ul className="flex flex-row justify-between gap-4 text-base font-semibold pt-3">
              <li>
                <NavLink to={NonAuthRoutes.startHere}>
                  <p className="text-primary">Start Here</p>
                </NavLink>
              </li>
              <li>
                <Link to={NonAuthRoutes.job}>
                  <p className="">Jobs</p>
                </Link>
              </li>
              <li>
                <Link to={NonAuthRoutes.collaboration}>
                  <p className="">Collaborations</p>
                </Link>
              </li>
              <li>
                <Link to={NonAuthRoutes.resource}>
                  <p className="">Resources</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="-ml-40 pt-1.5">
            <Link to={NonAuthRoutes.base}>
              <img src="" alt="Logo" className="w-24 h-10" />
            </Link>
          </div>
          <div className="font-semibold  text-base pt-2">
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
