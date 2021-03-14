import React from 'react';
import { Link } from 'react-router-dom';

export const WelcomeStartButtonA: React.FC = () => {
  return (
    <React.Fragment>
      <div className="grid grid-rows-1 mt-14 justify-items-center text-center font-montserrat">
        <h2 className="text-white p-4 rounded font-semibold hover:no-underline">
          <Link to="/company-sign-up">Get started now for free</Link>
        </h2>
      </div>
    </React.Fragment>
  );
};
