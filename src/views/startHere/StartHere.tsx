import React from 'react';
import { NavBar } from '../components';
import { StartHereJobList } from './components/StartHereJobList';

export const StartHere: React.FC = () => {
  return (
    <React.Fragment>
      <div className="">
        <NavBar />
      </div>
      <div className="grid grid-row-6 justify-center">
        <div>
          <StartHereJobList />
        </div>
        <div></div>
      </div>
    </React.Fragment>
  );
};
