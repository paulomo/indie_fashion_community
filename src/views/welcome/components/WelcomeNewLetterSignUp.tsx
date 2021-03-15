import React from 'react';
import { Link } from 'react-router-dom';
import { NonAuthRoutes } from '../../../common/route/roles/RouteEnum';

export const WelcomeNewLetterSignUp: React.FC = () => {
  return (
    <React.Fragment>
      <div className="grid-cols-5">
        <div className="">
          <h2>
            Welcome! We're helping each other start profitable online businesses and side projects.
          </h2>
        </div>
        <div className="flex gap-6">
          <div>
            <button>Join Us</button>
          </div>
          <div>
            <Link to={NonAuthRoutes.base}>
              <h2>or Lear More</h2>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
